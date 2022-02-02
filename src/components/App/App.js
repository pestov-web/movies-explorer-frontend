import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

import "./App.css";
import Movies from "../Movies/Movies";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
        <Header currenPath={location.pathname} />
      </Route>

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <Movies />
        </Route>
      </Switch>
      <Route exact path={["/", "/movies", "/saved-movies"]}>
        <Footer />
      </Route>
    </div>
  );
}

export default App;
