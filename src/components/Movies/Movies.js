import "./Movies.css";
import Search from "../Search/Search";

import FilmsList from "../FilmsList/FilmsList";

function Movies() {
  return (
    <main>
      <Search />
      <FilmsList />
    </main>
  );
}

export default Movies;
