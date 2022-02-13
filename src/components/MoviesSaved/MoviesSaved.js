import './MoviesSaved.css';
import Search from '../Search/Search';

import FilmsList from '../FilmsList/FilmsList';

function MoviesSaved({ validationSchema, onSearch }) {
  return (
    <main>
      <Search validationSchema={validationSchema} onSearch={onSearch} />
      <FilmsList />
    </main>
  );
}

export default MoviesSaved;
