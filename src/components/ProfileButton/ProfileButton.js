import "./ProfileButton.css";
import { NavLink } from "react-router-dom";

function ProfileButton({ closeModal }) {
  return (
    <NavLink
      onClick={closeModal}
      to="/profile"
      className="profile__button button"
    >
      Аккаунт
      <i className="profile__ico"></i>
    </NavLink>
  );
}

export default ProfileButton;
