import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="section portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            href="https://github.com/pestov-web/how-to-learn"
            className="portfolio__link link"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
            <div className="portfolio__link-icon"></div>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://github.com/pestov-web/russian-travel"
            className="portfolio__link link"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
            <div className="portfolio__link-icon"></div>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://pestov-web.ru/"
            className="portfolio__link link"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <div className="portfolio__link-icon"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
