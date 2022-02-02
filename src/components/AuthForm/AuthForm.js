import React from "react";

import "./AuthForm.css";
import Logo from "../Logo/Logo";

function AuthForm({ formTitle }) {
  return (
    <form className="auth-form__title" action="" noValidate>
      <Logo />
      <h1 className="auth-form__title">{formTitle}</h1>
      <fieldset className="auth-form__fieldset">
        <input type="text" className="auth-form__input" />
        <input type="text" className="auth-form__input" />
        <input type="text" className="auth-form__input" />
        <span className="auth-form__error">error</span>
      </fieldset>
    </form>
  );
}

export default AuthForm;
