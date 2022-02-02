import "./Header.css";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";

function Header({ currenPath }) {
  return (
    <header
      className={currenPath === "/" ? "header header_place_landing" : "header"}
    >
      <Logo />
      <nav className="header__nav">
        <Menu />
      </nav>
    </header>
  );
}

export default Header;
