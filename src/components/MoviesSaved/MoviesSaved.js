import React from 'react';
import './MoviesSaved.css';
import Search from '../Search/Search';

import FilmsList from '../FilmsList/FilmsList';
import Preloader from '../Preloader/Preloader';
import { filterMovie } from '../../utils/Utils';
import { NO_RESULT_MSG } from '../../utils/constants';
import localStorageHandler from '../../utils/LocalStorageHandler';

function MoviesSaved({
  loggedIn,
  currenPath,
  onSave,
  onRemove,
  movies,
  savedMovies,
  setSavedMovies,
}) {
  const [values, setValues] = React.useState({
    title: '',
    short: false,
  });

  const [isLoaded, setIsLoaded] = React.useState(true);
  const [isFound, setIsFound] = React.useState(true);
  const [result, setResult] = React.useState(savedMovies || []);

  const handleButtonClick = () => {
    if (values.title) {
      handleSubmit();
    }
  };

  const handleCheckboxClick = (e) =>
    setValues({ ...values, short: e.target.checked });

  const handleFormChange = (value) => setValues({ ...values, title: value });

  const handleSubmit = () => {
    setIsLoaded(false);

    const foundMovies = movies.filter((movie) =>
      filterMovie(movie, values.title, values.short)
    );

    setIsFound(foundMovies.length);
    setResult(foundMovies);

    setTimeout(() => setIsLoaded(true), 1500);
  };

  React.useEffect(() => {
    if (loggedIn) {
      const savedList = localStorageHandler.get('savedMoviesList');
      if (savedList) setSavedMovies(savedList);
    }
  }, [loggedIn, setSavedMovies]);

  React.useEffect(() => {
    if (values.title) {
      handleSubmit();
    }
  }, [values.short]);

  React.useEffect(() => {
    setResult(savedMovies || []);
  }, [savedMovies]);

  return (
    <main>
      <Search
        onSubmit={handleButtonClick}
        onChange={handleFormChange}
        value={values.title}
        checkboxClick={handleCheckboxClick}
        checkboxValue={values.short}
      />
      {isLoaded ? (
        isFound ? (
          <FilmsList
            currenPath={currenPath}
            movies={result}
            onSave={onSave}
            onRemove={onRemove}
          />
        ) : (
          <span className="movies__result-error">{NO_RESULT_MSG}</span>
        )
      ) : (
        <Preloader />
      )}
    </main>
  );
}

export default MoviesSaved;
