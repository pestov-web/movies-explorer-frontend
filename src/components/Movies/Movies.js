import React from 'react';
import './Movies.css';
import Search from '../Search/Search';

import FilmsList from '../FilmsList/FilmsList';
import Preloader from '../Preloader/Preloader';
import { filterMovie } from '../../utils/Utils';
import { NO_RESULT_MSG } from '../../utils/constants';
import localStorageHandler from '../../utils/LocalStorageHandler';

function Movies({
  currenPath,
  onSave,
  onRemove,
  movies,
  savedMovies,
  setLastResult,
  lastResult,
  lastSearchTitle,
  setLastSearchTitle,
  lastCheckboxState,
  setLastCheckboxState,
}) {
  const [values, setValues] = React.useState(
    { title: lastSearchTitle, short: lastCheckboxState } || {
      title: '',
      short: false,
    }
  );

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
    if (currenPath === '/movies') {
      localStorageHandler.save('lastResult', foundMovies);
      setLastResult(foundMovies);
      setLastSearchTitle(values.title);
      setLastCheckboxState(values.short);
    }

    setTimeout(() => setIsLoaded(true), 1500);
  };

  React.useEffect(() => {
    if (values.title || currenPath === '/saved-movies') {
      handleSubmit();
    }
  }, [values.short]);

  React.useEffect(() => {
    setValues({ title: '', short: false });
    setIsFound(true);
  }, [currenPath]);

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

export default Movies;
