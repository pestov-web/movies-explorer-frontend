import "./FilmsList.css";

import MoreButton from "../MoreButton/MoreButton";
import FilmsCard from "../FilmsCard/FilmsCard";
import React from "react";

function FilmsList({ currenPath }) {
  return (
    <section className="films">
      <ul className="films__cards">
        <FilmsCard />
      </ul>
      {currenPath === "/movies" ? <MoreButton /> : null}
    </section>
  );
}

export default FilmsList;
