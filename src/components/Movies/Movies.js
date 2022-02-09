import './Movies.css';
import Search from '../Search/Search';

import FilmsList from '../FilmsList/FilmsList';

function Movies({ currenPath, validationSchema }) {
  return (
    <main>
      <Search validationSchema={validationSchema} />
      <FilmsList currenPath={currenPath} />
    </main>
  );
}

export default Movies;
