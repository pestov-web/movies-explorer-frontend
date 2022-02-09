import { Field, Form, Formik } from 'formik';
import './Search.css';

function Search(validationSchema) {
  return (
    <section className="section search">
      <div className="search__wrapper">
        <Formik
          initialValues={{
            film: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          {({ errors, touched }) => (
            <Form className="search__form">
              <Field
                className="search__form-input"
                name="film"
                type="text"
                placeholder="Фильм"
              />
              {errors.film && touched.film ? (
                <span className="auth-form__error">{errors.film}</span>
              ) : null}

              <button
                className="search__form-submit button"
                type="submit"
              ></button>
            </Form>
          )}
        </Formik>
        {/*<form className="search__form" action="#" method="#">*/}
        {/*  <input*/}
        {/*    className="search__form-input"*/}
        {/*    name="film-search"*/}
        {/*    placeholder="Фильм"*/}
        {/*    type="search"*/}
        {/*    required*/}
        {/*  />*/}
        {/*  <button className="search__form-submit button" type="submit"></button>*/}
        {/*</form>*/}
      </div>

      <div className="search__checkbox">
        <label className="search__checkbox-label">
          <input className="search__checkbox-input" type="checkbox" />
          <span className="search__checkbox-text">Короткометражки</span>
        </label>
      </div>
    </section>
  );
}

export default Search;
