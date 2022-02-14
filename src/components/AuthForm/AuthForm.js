import React from 'react';

import './AuthForm.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { useFormValidation } from '../../hooks/useFormValidation';
import { REGEXP } from '../../utils/constants';

function AuthForm({
  currenPath,
  formTitle,
  submitText,
  linkText,
  linkButtonText,
  linkTo,
  onFormSubmit,
  errorMessage,
}) {
  const [isDisabled, setDisabled] = React.useState(true);
  const { values, errors, isValid, handleChange } = useFormValidation({
    name: '',
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    onFormSubmit(values);
  }

  React.useEffect(() => {
    if (currenPath === '/signup') {
      setDisabled(
        !values.name || !values.email || !values.password || !isValid
      );
    } else {
      setDisabled(!values.email || !values.password || !isValid);
    }
  }, [handleChange]);

  return (
    <div className="auth-form">
      <form className="auth-form__form" onSubmit={handleSubmit}>
        <Logo />
        <h1 className="auth-form__title">{formTitle}</h1>
        {currenPath === '/signup' ? (
          <div className="auth-form__wrapper">
            <label htmlFor="name" className="auth-form__label">
              Имя
            </label>{' '}
            <input
              className="auth-form__input"
              name="name"
              placeholder="Имя"
              value={values.name || ''}
              onChange={handleChange}
              pattern={REGEXP.name}
            />
            <span className="auth-form__error">{errors.name}</span>
          </div>
        ) : null}

        <div className="auth-form__wrapper">
          <label htmlFor="email" className="auth-form__label">
            E-mail
          </label>{' '}
          <input
            className="auth-form__input"
            name="email"
            type="email"
            placeholder="E-mail"
            value={values.email || ''}
            onChange={handleChange}
          />
          <span className="auth-form__error">{errors.email}</span>
        </div>
        <div className="auth-form__wrapper">
          <label htmlFor="password" className="auth-form__label">
            Пароль
          </label>{' '}
          <input
            className="auth-form__input"
            name="password"
            type="password"
            placeholder="Пароль"
            onChange={handleChange}
            pattern={REGEXP.password}
          />
          <span className="auth-form__error">{errors.password}</span>
        </div>
        {currenPath === '/signin' ? (
          <div className="auth-form__spacer"></div>
        ) : null}
        <button
          className="auth-form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          {submitText}
        </button>
      </form>
      <div className="auth-form__goto">
        <span className="auth-form__error-text">{errorMessage}</span>
        <span className="auth-form__goto-text">{linkText}</span>
        <Link to={linkTo} className="auth-form__goto-link link">
          {linkButtonText}
        </Link>
      </div>
    </div>
  );
}

export default AuthForm;
