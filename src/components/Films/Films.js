import "./Films.css";
import img1 from "../../images/films/1.png";
import img2 from "../../images/films/2.png";
import img3 from "../../images/films/3.png";
import img4 from "../../images/films/4.png";
import img5 from "../../images/films/5.png";

function Films() {
  return (
    <section className="films">
      <ul className="films__cards">
        <li className="films__card">
          <img src={img1} alt="" className="films__image" />
          <h2 className="films__title">33 слова о дизайне</h2>
          <button className="films__add-button">
            <svg
              className="films__button-image"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.273 0C6.273 0 5.545.523 5 1.09 4.455.567 3.727 0 2.727 0 1.137 0 0 1.264 0 2.833c0 .785.318 1.482.91 1.962L5 8.5l4.09-3.705c.546-.523.91-1.177.91-1.962C10 1.264 8.864 0 7.273 0z"
                fill="#FF4062"
              />
            </svg>
          </button>
          <time className="film__duration">1ч 42м</time>
        </li>
        <li className="films__card">
          <img src={img2} alt="" className="films__image" />
          <h2 className="films__title">Киноальманах «100 лет дизайна»</h2>
          <button className="films__add-button">
            <svg
              className="films__button-image"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.273 0C6.273 0 5.545.523 5 1.09 4.455.567 3.727 0 2.727 0 1.137 0 0 1.264 0 2.833c0 .785.318 1.482.91 1.962L5 8.5l4.09-3.705c.546-.523.91-1.177.91-1.962C10 1.264 8.864 0 7.273 0z" />
            </svg>
          </button>
          <time className="film__duration">1ч 42м</time>
        </li>
        <li className="films__card">
          <img src={img3} alt="" className="films__image" />
          <h2 className="films__title">В погоне за Бенкси</h2>
          <button className="films__add-button">
            <svg
              className="films__button-image"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.273 0C6.273 0 5.545.523 5 1.09 4.455.567 3.727 0 2.727 0 1.137 0 0 1.264 0 2.833c0 .785.318 1.482.91 1.962L5 8.5l4.09-3.705c.546-.523.91-1.177.91-1.962C10 1.264 8.864 0 7.273 0z" />
            </svg>
          </button>
          <time className="film__duration">1ч 42м</time>
        </li>
        <li className="films__card">
          <img src={img4} alt="" className="films__image" />
          <h2 className="films__title">Баския: Взрыв реальности</h2>
          <button className="films__add-button">
            <svg
              className="films__button-image"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.273 0C6.273 0 5.545.523 5 1.09 4.45.567 3.727 0 2.727 0 1.137 0 0 1.264 0 2.833c0 .785.318 1.482.91 1.962L5 8.5l4.09-3.705c.546-.523.91-1.177.91-1.962C10 1.264 8.864 0 7.273 0z"
                fill="#FF4062"
              />
            </svg>
          </button>
          <time className="film__duration">1ч 42м</time>
        </li>
        <li className="films__card">
          <img src={img5} alt="" className="films__image" />
          <h2 className="films__title">Бег это свобода</h2>
          <button className="films__add-button">
            <svg
              className="films__button-image"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.273 0C6.273 0 5.545.523 5 1.09 4.455.567 3.727 0 2.727 0 1.137 0 0 1.264 0 2.833c0 .785.318 1.482.91 1.962L5 8.5l4.09-3.705c.546-.523.91-1.177.91-1.962C10 1.264 8.864 0 7.273 0z" />
            </svg>
          </button>
          <time className="film__duration">1ч 42м</time>
        </li>
      </ul>
      <button className="films__button-more">Ещё</button>
    </section>
  );
}

export default Films;
