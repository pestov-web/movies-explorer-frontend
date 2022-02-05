import React from "react";
import { Formik, Form, Field } from "formik";
import "./ProfileUpdate.css";

function ProfileUpdate({ validationSchema }) {
  return (
    <section className="profile-update">
      <h1 className="profile-update__title">Привет, Виталий!</h1>
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
          <Form className="profile-update__form">
            <div className="profile-update__wrapper">
              {" "}
              <Field
                className="profile-update__input"
                name="name"
                placeholder="Имя"
              />
              {errors.name && touched.name ? (
                <span className="profile-update__input-error">
                  {errors.name}
                </span>
              ) : null}{" "}
              <span className="profile-update__userinfo">Виталий</span>
            </div>
            <div className="profile-update__wrapper">
              <Field
                className="profile-update__input"
                name="email"
                type="email"
                placeholder="E-mail"
              />
              {errors.email && touched.email ? (
                <span className="profile-update__input-error">
                  {errors.email}
                </span>
              ) : null}
              <span className="profile-update__userinfo">pochta@yandex.ru</span>
            </div>
            <button
              className="profile-update__button-submit button"
              type="submit"
            >
              Редактировать
            </button>
          </Form>
        )}
      </Formik>
      <button className="profile-update__button-logout button">
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default ProfileUpdate;
