import "./ModalMenu.css";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";

function ModalMenu({ modalIsOpen, afterOpenModal, closeModal, currenPath }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-menu__overlay"
        className="modal-menu"
      >
        <button
          className="modal-menu__close-button button"
          onClick={closeModal}
        ></button>
        <nav>
          <ul className="modal-menu__list">
            <li className="modal-menu__item">
              <NavLink
                onClick={closeModal}
                to="/"
                className="modal-menu__link link"
                activeClassName={currenPath === "/" ? "link_active" : ""}
              >
                Главная
              </NavLink>
            </li>{" "}
            <li className="modal-menu__item">
              <NavLink
                onClick={closeModal}
                to="/movies"
                className="modal-menu__link link"
                activeClassName="link_active"
              >
                Фильмы
              </NavLink>
            </li>
            <li className="modal-menu__item">
              <NavLink
                onClick={closeModal}
                to="/saved-movies"
                className="modal-menu__link link"
                activeClassName="link_active"
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <NavLink
            onClick={closeModal}
            to="/profile"
            className="modal-menu__profile-button button"
          >
            Аккаунт
            <i className="modal-menu__profile-ico"></i>
          </NavLink>
        </nav>
      </Modal>
    </div>
  );
}

export default ModalMenu;
