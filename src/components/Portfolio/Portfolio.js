import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="section portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="" className="portfolio__link link">
            Статичный сайт
          </a>
          <div className="portfolio__link-icon"></div>
        </li>
        <li className="portfolio__item">
          <a href="" className="portfolio__link link">
            Адаптивный сайт
          </a>
          <div className="portfolio__link-icon"></div>
        </li>
        <li className="portfolio__item">
          <a href="" className="portfolio__link link">
            Одностраничное приложение
          </a>
          <div className="portfolio__link-icon"></div>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
