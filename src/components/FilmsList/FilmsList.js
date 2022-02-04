import "./FilmsList.css";

import MoreButton from "../MoreButton/MoreButton";
import FilmsCard from "../FilmsCard/FilmsCard";

function FilmsList() {
  return (
    <section className="films">
      <ul className="films__cards">
        <FilmsCard />
      </ul>
      <MoreButton />
    </section>
  );
}

export default FilmsList;
