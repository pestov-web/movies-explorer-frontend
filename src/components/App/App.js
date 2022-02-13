import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

import './App.css';
import Movies from '../Movies/Movies';
import AuthForm from '../AuthForm/AuthForm';
import MoviesSaved from '../MoviesSaved/MoviesSaved';
import NotFound from '../NotFound/NotFound';
import ProfileUpdate from '../ProfileUpdate/ProfileUpdate';
import localStorageHandler from '../../utils/LocalStorageHandler';
import { getMovieData } from '../../utils/Utils.js';
// подключаем контекст
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const location = useLocation();
  const history = useHistory();

  const tst = true;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [initialMovies, setInitialMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // регистрируем пользователя
  function handleRegister(data) {
    console.log(data);
    if (data.name && data.email && data.password) {
      mainApi
        .register(data)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            history.push('/movies');
          }
        })
        .catch((err) => {
          console.log(`ошибка: ${err}`);
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
          history.push('/movies');
        })
        .catch((err) => {
          console.log(`ошибка: ${err}`);
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
          console.log(`не могу поменять данные пользователя: ${err}.`);
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
        setSavedMovies([]);
        history.push('/');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  React.useEffect(() => {
    mainApi.checkToken().then(
      () => {
        setLoggedIn(true);
        history.push('/movies');
      },
      (err) => {
        console.log(err);
      }
    );
  }, [history]);

  // получем данные ]
  React.useEffect(() => {
    mainApi
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(`ошибка: ${err}`);
      });
  }, []);

  React.useEffect(() => {
    Promise.all([moviesApi.getMovies(), mainApi.getMovies()])
      .then(([movies, mainMovies]) => {
        const getMoviesData = getMovieData(movies);

        setInitialMovies(getMoviesData);
        setSavedMovies(mainMovies);

        localStorageHandler.save(
          'savedMovies',
          mainMovies.map((movie) => movie.movieId)
        );
      })
      .catch((err) => console.error(err));
  }, [loggedIn]);

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
          savedList.filter((id) => id !== movie.movieId.toString())
        );
      })
      .catch((err) => console.error(err));
  };

  const handleSaveMovie = (movie) => {
    mainApi
      .saveMovie(movie)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);

        const savedList = localStorageHandler.get('savedMovies');

        localStorageHandler.save('savedMovies', [
          movie.movieId.toString(),
          ...savedList,
        ]);
      })
      .catch((err) => console.error(err));
  };

  const handleEmptySearch = () => {};

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
          <Route exact path="/movies">
            <Movies
              currenPath={location.pathname}
              movies={initialMovies}
              onSave={handleSaveMovie}
              onRemove={handleRemoveMovie}
              onEmptySearch={handleEmptySearch}
            />
          </Route>
          <Route exact path="/saved-movies">
            <Movies
              currenPath={location.pathname}
              savedMovies={savedMovies}
              movies={savedMovies}
              onRemove={handleRemoveMovie}
              onEmptySearch={handleEmptySearch}
            />
          </Route>
          <Route exact path="/profile">
            <ProfileUpdate
              currentUser={currentUser}
              onSignOut={handleSingOut}
              onFormSubmit={handleUpdateUser}
            />
          </Route>
          <Route exact path="/signup">
            <AuthForm
              currenPath={location.pathname}
              formTitle="Добро пожаловать!"
              submitText="Зарегистрироваться"
              linkText="Уже зарегистрированы?"
              linkButtonText="Войти"
              linkTo="/signin"
              onFormSubmit={handleRegister}
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
