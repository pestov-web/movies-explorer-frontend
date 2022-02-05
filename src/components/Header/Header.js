import React from "react";
import "./Header.css";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({
  currenPath,
  loggedIn,
  modalIsOpen,
  openModal,

  closeModal,
}) {
  return (
    <header
      className={currenPath === "/" ? "header header_place_landing" : "header"}
    >
      <Logo />
      <nav className="header__nav">
        {loggedIn ? (
          <BurgerMenu
            currenPath={currenPath}
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        ) : (
          <Menu />
        )}
      </nav>
    </header>
  );
}

export default Header;
