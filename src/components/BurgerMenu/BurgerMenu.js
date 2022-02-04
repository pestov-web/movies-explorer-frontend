import "./BurgerMenu.css";
import { NavLink } from "react-router-dom";
import BurgerButton from "../BurgerButton/BurgerButton";
import ModalMenu from "../Modal/ModalMenu";
import ProfileButton from "../ProfileButton/ProfileButton";

function BurgerMenu({
  currenPath,
  modalIsOpen,
  openModal,
  afterOpenModal,
  closeModal,
}) {
  return (
    <>
      <div className="burger-menu__wrapper">
        <ul className="burger-menu">
          <li className="burger-menu__item">
            <NavLink
              to="/movies"
              className="burger-menu__link link"
              activeClassName="link_active"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <NavLink
              to="/saved-movies"
              className="burger-menu__link link"
              activeClassName="link_active"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <ProfileButton currenPath={currenPath} />
      </div>{" "}
      <BurgerButton currenPath={currenPath} openModal={openModal} />
      <ModalMenu
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
        currenPath={currenPath}
      />
    </>
  );
}

export default BurgerMenu;
