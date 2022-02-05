import "./Profile.css";
import profileImg from "../../images/profile/profile.jpeg";

function Profile() {
  return (
    <section className="section profile">
      <h2 className="section__title">Студент</h2>
      <div className="profile__wrapper">
        <img
          src={profileImg}
          alt="фотография студента"
          className="profile__photo"
        />
        <div className="profile__info">
          <h3 className="profile__title">Виталий</h3>
          <p className="profile__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="profile__bio">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>

          <ul className="profile__social">
            <li className="profile__social-item">
              <a
                href="https://www.facebook.com/mindwrk/"
                target="_blank"
                className="profile__social-link link"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="profile__social-item">
              <a
                href="https://github.com/pestov-web"
                target="_blank"
                className="profile__social-link link"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Profile;
