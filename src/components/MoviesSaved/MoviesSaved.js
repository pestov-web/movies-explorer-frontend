import './MoviesSaved.css';
import Search from '../Search/Search';

import FilmsList from '../FilmsList/FilmsList';

function MoviesSaved(validationSchema) {
  return (
    <main>
      <Search validationSchema={validationSchema} />
      <FilmsList />
    </main>
  );
}

export default MoviesSaved;
