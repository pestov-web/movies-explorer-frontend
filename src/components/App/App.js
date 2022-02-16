import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

import './App.css';
import Movies from '../Movies/Movies';
import AuthForm from '../AuthForm/AuthForm';
import NotFound from '../NotFound/NotFound';
import ProfileUpdate from '../ProfileUpdate/ProfileUpdate';
import localStorageHandler from '../../utils/LocalStorageHandler';
import { getMovieData } from '../../utils/Utils.js';
// подключаем контекст
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { ErrorHandler } from '../../utils/ErrorHandler';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MoviesSaved from '../MoviesSaved/MoviesSaved';

function App() {
  const location = useLocation();
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // регистрируем пользователя
  function handleRegister(data) {
    if (data.name && data.email && data.password) {
      mainApi
        .register(data)
        .then((res) => {
          if (res) {
            handleLogin(data);
          }
        })
        .catch((err) => {
          setErrorMessage(ErrorHandler(err));
        })
        .finally(() => {});
    }
  }

  // авторизируем пользователя
  function handleLogin(data) {
    if (data.email && data.password) {
      mainApi
        .authorize(data)
        .then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
          getMoviesList();
          history.push('/movies');
        })
        .catch((err) => {
          setErrorMessage(ErrorHandler(err));
        });
    }
  }

  // обновляем данные пользователя
  function handleUpdateUser(data) {
    if (data.name && data.email)
      mainApi
        .patchUserInfo(data)
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          ErrorHandler(err);
        });
  }

  // удаляем токен на выходе
  function handleSingOut(e) {
    e.preventDefault();
    mainApi.logOut().then(
      () => {
        setLoggedIn(false);
        localStorageHandler.purgeAll();
        setCurrentUser({});

        history.push('/');
      },
      (err) => {
        ErrorHandler(err);
      }
    );
  }

  React.useEffect(() => {
    if (
      loggedIn &&
      (location.pathname === '/signin' || location.pathname === '/signup')
    ) {
      console.log('1233333');
      history.push('/movies');
    }
  }, [history, location.pathname, loggedIn]);

  React.useEffect(() => {
    mainApi.checkToken().then(
      () => {
        setLoggedIn(true);
      },
      (err) => {
        ErrorHandler(err);
      }
    );
  }, [history]);

  // получем данные
  React.useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          ErrorHandler(err);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          ErrorHandler(err);
        });
    }
  }, [loggedIn]);

  const getMoviesList = () => {
    Promise.all([moviesApi.getMovies(), mainApi.getMovies()])
      .then(([movies, mainMovies]) => {
        const getMoviesData = getMovieData(movies);
        setSavedMovies(mainMovies || []);
        localStorageHandler.save('savedMovies', mainMovies || []);
        localStorageHandler.save('initialMovies', getMoviesData);
      })
      .catch((err) => ErrorHandler(err));
  };

  const handleRemoveMovie = (movie) => {
    const savedMovie = savedMovies.find(
      (item) => item.movieId === movie.movieId
    );
    mainApi
      .removeMovie(savedMovie._id)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((item) => item._id !== savedMovie._id)
        );

        const savedList = localStorageHandler.get('savedMovies');

        localStorageHandler.save(
          'savedMovies',
          savedList.filter((item) => item._id !== movie._id)
        );
      })
      .catch((err) => ErrorHandler(err));
  };

  const handleSaveMovie = (movie) => {
    console.log(movie);
    mainApi
      .saveMovie(movie)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);

        const savedList = localStorageHandler.get('savedMovies');
        localStorageHandler.save('savedMovies', [movie, ...savedList]);
      })
      .catch((err) => ErrorHandler(err));
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
          <Header
            currenPath={location.pathname}
            loggedIn={loggedIn}
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        </Route>

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            currenPath={location.pathname}
            onSave={handleSaveMovie}
            onRemove={handleRemoveMovie}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            component={MoviesSaved}
            loggedIn={loggedIn}
            currenPath={location.pathname}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            movies={savedMovies}
            onRemove={handleRemoveMovie}
          />
          <ProtectedRoute
            exact
            path="/profile"
            component={ProfileUpdate}
            loggedIn={loggedIn}
            currentUser={currentUser}
            onSignOut={handleSingOut}
            onFormSubmit={handleUpdateUser}
          />

          <Route exact path="/signup">
            <AuthForm
              currenPath={location.pathname}
              formTitle="Добро пожаловать!"
              submitText="Зарегистрироваться"
              linkText="Уже зарегистрированы?"
              linkButtonText="Войти"
              linkTo="/signin"
              onFormSubmit={handleRegister}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          </Route>
          <Route exact path="/signin">
            <AuthForm
              currenPath={location.pathname}
              formTitle="Рады видеть!"
              submitText="Войти"
              linkText="Ещё не зарегистрированы?"
              linkButtonText="Регистрация"
              linkTo="/signup"
              isSignIn="true"
              onFormSubmit={handleLogin}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Route exact path={['/', '/movies', '/saved-movies']}>
          <Footer />
        </Route>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
