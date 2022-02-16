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
  lastResult,
  setLastResult,
  values,
  setValues,
}) {
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [isFound, setIsFound] = React.useState(true);
  const [result, setResult] = React.useState(lastResult || []);

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
    console.log(values);
    const foundMovies = movies.filter((movie) =>
      filterMovie(movie, values.title, values.short)
    );

    setIsFound(foundMovies.length);
    setResult(foundMovies);

    localStorageHandler.save('lastResult', foundMovies);
    setLastResult(foundMovies);

    setTimeout(() => setIsLoaded(true), 1500);
  };

  React.useEffect(() => {
    setResult(lastResult || []);
  }, [lastResult]);

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
