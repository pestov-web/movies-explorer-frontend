import "./ProfileButton.css";
import { NavLink } from "react-router-dom";

function ProfileButton({ currenPath, closeModal }) {
  return (
    <NavLink
      onClick={closeModal}
      to="/profile"
      className={
        currenPath === "/"
          ? "profile__button profile__button_place_landing button "
          : "profile__button button"
      }
    >
      Аккаунт
      <i
        className={
          currenPath === "/"
            ? "profile__ico profile__ico_place_landing"
            : "profile__ico"
        }
      ></i>
    </NavLink>
  );
}

export default ProfileButton;
