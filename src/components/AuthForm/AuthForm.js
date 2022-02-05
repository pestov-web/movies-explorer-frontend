import React from "react";

import "./AuthForm.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";

function AuthForm({
  currenPath,
  formTitle,
  submitText,
  linkText,
  linkButtonText,
  linkTo,
  isSignIn,
  validationSchema,
}) {
  return (
    <div className="auth-form">
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <Form className="auth-form__form">
            <Logo />
            <h1 className="auth-form__title">{formTitle}</h1>
            {currenPath === "/signup" ? (
              <div className="auth-form__wrapper">
                <label htmlFor="name" className="auth-form__label">
                  Имя
                </label>{" "}
                <Field
                  className="auth-form__input"
                  name="name"
                  placeholder="Имя"
                />
                {errors.name && touched.name ? (
                  <span className="auth-form__error">{errors.name}</span>
                ) : null}
              </div>
            ) : null}

            <div className="auth-form__wrapper">
              <label htmlFor="email" className="auth-form__label">
                E-mail
              </label>{" "}
              <Field
                className="auth-form__input"
                name="email"
                type="email"
                placeholder="E-mail"
              />
              {errors.email && touched.email ? (
                <span className="auth-form__error">{errors.email}</span>
              ) : null}
            </div>
            <div className="auth-form__wrapper">
              <label htmlFor="password" className="auth-form__label">
                Пароль
              </label>{" "}
              <Field
                className="auth-form__input"
                name="password"
                type="password"
                placeholder="Пароль"
              />
              {errors.password && touched.password ? (
                <span className="auth-form__error">{errors.password}</span>
              ) : null}
            </div>
            {currenPath === "/signin" ? (
              <div className="auth-form__spacer"></div>
            ) : null}
            <button className="auth-form__submit button" type="submit">
              {submitText}
            </button>
          </Form>
        )}
      </Formik>
      <div className="auth-form__goto">
        <span className="auth-form__goto-text">{linkText}</span>
        <Link to={linkTo} className="auth-form__goto-link link">
          {linkButtonText}
        </Link>
      </div>
    </div>
  );
}

export default AuthForm;
