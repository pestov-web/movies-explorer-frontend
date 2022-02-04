import "./Menu.css";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <ul className="menu">
      <li className="menu__item">
        <Link to="/signup" className="menu__link link">
          Регистрация
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/signin" className="menu__button button">
          Войти
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
