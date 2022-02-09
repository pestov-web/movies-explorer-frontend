import './FilmsCard.css';
import img1 from '../../images/films/1.png';

function FilmsCard() {
  return (
    <>
      <li className="films__card">
        <img
          src={img1}
          alt="Баннер 33 слова о дизайне"
          className="films__image"
        />
        <h2 className="films__title">33 слова о дизайне</h2>
        <button className="films__add-button films__add-button_checked button"></button>
        <time className="film__duration">1ч 42м</time>
      </li>
    </>
  );
}

export default FilmsCard;
