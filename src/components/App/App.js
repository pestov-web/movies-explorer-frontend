import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import {
  validateSignUp,
  validateSignIn,
  validateUserUpdate,
} from "../../utils/validation-schemas";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

import "./App.css";
import Movies from "../Movies/Movies";
import AuthForm from "../AuthForm/AuthForm";
import MoviesSaved from "../MoviesSaved/MoviesSaved";
import NotFound from "../NotFound/NotFound";
import ProfileUpdate from "../ProfileUpdate/ProfileUpdate";

// подключаем контекст
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";

function App() {
  const location = useLocation();
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // авторизируем пользователя
  function handleLogin(data) {
    if (data.email && data.password) {
      console.log("if ok  :  " + data.email);
      mainApi
        .authorize(data.email, data.password)
        .then((res) => {
          setCurrentUser(res);
          console.log(res);
          setLoggedIn(true);
          history.push("/movies");
          console.log(loggedIn);
        })
        .catch((err) => {
          console.log(`ошибка: ${err}`);
        });
    }
  }

  React.useEffect(() => {
    mainApi.checkToken().then(
      () => {
        setLoggedIn(true);
        history.push("/movies");
      },
      (err) => {
        console.log(err);
      }
    );
  }, [history]);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
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
            <Movies currenPath={location.pathname} />
          </Route>
          <Route exact path="/saved-movies">
            <MoviesSaved currenPath={location.pathname} />
          </Route>
          <Route exact path="/profile">
            <ProfileUpdate validationSchema={validateUserUpdate} />
          </Route>
          <Route exact path="/signup">
            <AuthForm
              currenPath={location.pathname}
              formTitle="Добро пожаловать!"
              submitText="Зарегистрироваться"
              linkText="Уже зарегистрированы?"
              linkButtonText="Войти"
              linkTo="/signin"
              validationSchema={validateSignUp}
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
              validationSchema={validateSignIn}
              onFormSubmit={handleLogin}
            />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Route exact path={["/", "/movies", "/saved-movies"]}>
          <Footer />
        </Route>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
