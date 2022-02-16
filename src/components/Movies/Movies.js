import React from 'react';
import './Movies.css';
import Search from '../Search/Search';

import FilmsList from '../FilmsList/FilmsList';
import Preloader from '../Preloader/Preloader';
import { filterMovie } from '../../utils/Utils';
import { NO_RESULT_MSG } from '../../utils/constants';
import localStorageHandler from '../../utils/LocalStorageHandler';
import mainApi from '../../utils/MainApi';
import { ErrorHandler } from '../../utils/ErrorHandler';

function Movies({ loggedIn, currenPath, onSave, onRemove }) {
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [isFound, setIsFound] = React.useState(true);
  const [result, setResult] = React.useState(lastResult || []);
  const [lastResult, setLastResult] = React.useState([]);
  const [initialMovies, setInitialMovies] = React.useState([]);
  const [values, setValues] = React.useState({
    title: '',
    short: false,
  });

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
    console.log(initialMovies);
    const foundMovies = initialMovies.filter((movie) =>
      filterMovie(movie, values.title, values.short)
    );

    setIsFound(foundMovies.length);
    setResult(foundMovies);

    localStorageHandler.save('lastResult', foundMovies);
    setLastResult(foundMovies);

    localStorageHandler.save('values', values);
    setValues(values);

    setTimeout(() => setIsLoaded(true), 1500);
  };

  React.useEffect(() => {
    setResult(lastResult || []);
  }, [lastResult]);

  React.useEffect(() => {
    if (values.title) {
      handleSubmit();
    }
  }, [values.short]);

  React.useEffect(() => {
    if (loggedIn) {
      const movies = localStorageHandler.get('initialMovies');
      setInitialMovies(movies);
      const lastSearch = localStorageHandler.get('lastResult');
      if (lastSearch) setLastResult(lastSearch);
      const prevValues = localStorageHandler.get('values');
      if (prevValues) setValues(prevValues);
    }
  }, [currenPath]);

  // const handleRemoveMovie = (movie) => {
  //   const savedMovie = savedMovies.find(
  //     (item) => item.movieId === movie.movieId
  //   );
  //   mainApi
  //     .removeMovie(savedMovie._id)
  //     .then(() => {
  //       setSavedMovies(
  //         savedMovies.filter((item) => item._id !== savedMovie._id)
  //       );
  //
  //       const savedList = localStorageHandler.get('savedMoviesList');
  //
  //       localStorageHandler.save(
  //         'savedMoviesList',
  //         savedList.filter((id) => id !== movie.movieId.toString())
  //       );
  //     })
  //     .catch((err) => ErrorHandler(err));
  // };
  //
  // const handleSaveMovie = (movie) => {
  //   mainApi
  //     .saveMovie(movie)
  //     .then((movie) => {
  //       setSavedMovies([movie, ...savedMovies]);
  //
  //       const savedList = localStorageHandler.get('savedMoviesList');
  //       const savedMoviesIds = localStorageHandler.get('savedMovies');
  //       localStorageHandler.save('savedMovies', [
  //         movie.movieId.toString(),
  //         ...savedMoviesIds,
  //       ]);
  //       localStorageHandler.save('savedMoviesList', [movie, ...savedList]);
  //     })
  //     .catch((err) => ErrorHandler(err));
  // };
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
