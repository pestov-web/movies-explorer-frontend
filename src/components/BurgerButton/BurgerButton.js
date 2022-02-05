import "./BurgerButton.css";

function BurgerButton({ currenPath, openModal }) {
  return (
    <button
      onClick={openModal}
      className={
        currenPath === "/"
          ? "burger-button burger-button_place_landing button "
          : "burger-button button"
      }
    >
      <span className="burger-button__ico"></span>
    </button>
  );
}

export default BurgerButton;
