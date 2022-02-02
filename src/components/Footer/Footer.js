import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__wrapper">
        <ul className="footer__social">
          <li className="footer__social-item">
            <a
              href="https://practicum.yandex.ru"
              target="_blank"
              className="footer__social-link link"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__social-item">
            <a
              href="https://github.com/pestov-web"
              target="_blank"
              className="footer__social-link link"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="footer__social-item">
            <a
              href="https://www.facebook.com/mindwrk"
              target="_blank"
              className="footer__social-link link"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
        <small className="footer__copy">©2020</small>
      </div>
    </footer>
  );
}

export default Footer;
