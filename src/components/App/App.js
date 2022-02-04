import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
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

function App() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = React.useState(true);

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
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
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <MoviesSaved />
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
          />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Route exact path={["/", "/movies", "/saved-movies"]}>
        <Footer />
      </Route>
    </div>
  );
}

export default App;
