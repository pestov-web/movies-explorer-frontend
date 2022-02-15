import React from 'react';

import './ProfileUpdate.css';
import { REGEXP } from '../../utils/constants';
import { useFormValidation } from '../../hooks/useFormValidation';

function ProfileUpdate({ currentUser, onSignOut, onFormSubmit }) {
  const [isDisabled, setDisabled] = React.useState(true);
  const { values, errors, isValid, handleChange } = useFormValidation({
    name: currentUser.name,
    email: currentUser.email,
  });
  const { name, email } = values;

  function handleSubmit(e) {
    e.preventDefault();
    onFormSubmit(values);
  }

  React.useEffect(() => {
    setDisabled(
      !values.name ||
        !values.email ||
        (values.name === currentUser.name &&
          values.email === currentUser.email) ||
        !isValid
    );
  }, [handleChange]);

  return (
    <section className="profile-update">
      <h1 className="profile-update__title">Привет, {currentUser.name}!</h1>

      <form className="profile-update__form">
        <div className="profile-update__wrapper">
          <label className="profile-update__label" htmlFor="name">
            Имя
            <input
              className="profile-update__input profile-update__input-name"
              id="name"
              type="text"
              name="name"
              value={name || ''}
              minLength="2"
              maxLength="30"
              onChange={handleChange}
              required
            />
          </label>
          <span className="profile-update__input-error">{errors.name}</span>
        </div>
        <div className="profile-update__wrapper">
          <label className="profile-update__label" htmlFor="email">
            Email
            <input
              className="profile-update__input profile-update__input-email"
              id="email"
              type="email"
              name="email"
              value={email || ''}
              onChange={handleChange}
              required
            />
          </label>

          <span className="profile-update__input-error">{errors.email}</span>
        </div>
        <button
          onClick={handleSubmit}
          className="profile-update__button-submit button"
          type="submit"
          disabled={isDisabled}
        >
          Редактировать
        </button>
      </form>

      <button
        onClick={onSignOut}
        className="profile-update__button-logout button"
      >
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default ProfileUpdate;
