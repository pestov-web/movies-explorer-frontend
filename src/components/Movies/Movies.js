import "./Movies.css";
import Search from "../Search/Search";

import FilmsList from "../FilmsList/FilmsList";

function Movies({ currenPath }) {
  return (
    <main>
      <Search />
      <FilmsList currenPath={currenPath} />
    </main>
  );
}

export default Movies;
