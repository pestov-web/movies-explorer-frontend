import "./FilmsCard.css";
import img1 from "../../images/films/1.png";
import img2 from "../../images/films/2.png";
import img3 from "../../images/films/3.png";
import img4 from "../../images/films/4.png";
import img5 from "../../images/films/5.png";

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
      <li className="films__card">
        <img
          src={img2}
          alt="Баннер Киноальманах «100 лет дизайна»"
          className="films__image"
        />
        <h2 className="films__title">Киноальманах «100 лет дизайна»</h2>
        <button className="films__add-button films__add-button_checked button"></button>
        <time className="film__duration">1ч 42м</time>
      </li>
      <li className="films__card">
        <img
          src={img3}
          alt="Баннер В погоне за Бенкси"
          className="films__image"
        />
        <h2 className="films__title">В погоне за Бенкси</h2>
        <button className="films__add-button button"></button>
        <time className="film__duration">1ч 42м</time>
      </li>
      <li className="films__card">
        <img
          src={img4}
          alt="Баннер Баския: Взрыв реальности"
          className="films__image"
        />
        <h2 className="films__title">Баския: Взрыв реальности</h2>
        <button className="films__add-button button"></button>
        <time className="film__duration">1ч 42м</time>
      </li>
      <li className="films__card">
        <img src={img5} alt="Баннер Бег это свобода" className="films__image" />
        <h2 className="films__title">Бег это свобода</h2>
        <button className="films__add-button films__add-button_checked button"></button>
        <time className="film__duration">1ч 42м</time>
      </li>
    </>
  );
}

export default FilmsCard;
