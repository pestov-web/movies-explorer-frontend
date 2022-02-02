import "./Search.css";

function Search() {
  return (
    <section className="section search">
      <div className="search__form-wrapper">
        <form className="search__form" action="#" method="#">
          <input
            className="search__form-input"
            name="film-search"
            placeholder="Фильм"
            type="search"
          />
          <button className="search__form-submit" type="submit"></button>
        </form>
      </div>

      <div className="search__checkbox-wrapper">
        <label className="search__checkbox">
          <input className="search__checkbox-input" type="checkbox" />
          <span className="search__checkbox-text">Короткометражки</span>
        </label>
      </div>
    </section>
  );
}

export default Search;
