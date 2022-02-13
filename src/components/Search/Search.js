import './Search.css';

import { REGEXP } from '../../utils/constants';

function Search({ onSubmit, onChange, value, checkboxClick, checkboxValue }) {
  const handleChange = (e) => onChange(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <section className="section search">
      <div className="search__wrapper">
        <form className="search__form" action="#" method="#" noValidate>
          <input
            className="search__form-input"
            name="film-search"
            placeholder="Фильм"
            type="search"
            value={value}
            onChange={handleChange}
            pattern={REGEXP.search}
            required
          />
          <button
            className="search__form-submit button"
            type="submit"
            onClick={handleSubmit}
          ></button>
        </form>
      </div>{' '}
      <div className="search__checkbox">
        <label className="search__checkbox-label">
          <input
            className="search__checkbox-input"
            type="checkbox"
            value={checkboxValue}
            onClick={checkboxClick}
          />
          <span className="search__checkbox-text">Короткометражки</span>
        </label>
      </div>
    </section>
  );
}

export default Search;
