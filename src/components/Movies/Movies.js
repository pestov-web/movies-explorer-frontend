import React from 'react';
import './Movies.css';
import Search from '../Search/Search';

import FilmsList from '../FilmsList/FilmsList';
import Preloader from '../Preloader/Preloader';
import { filterMovie } from '../../utils/Utils';

function Movies({
  currenPath,
  onSave,
  onRemove,
  movies,
  savedMovies,
  onEmptySearch,
}) {
  const [values, setValues] = React.useState({ title: '', short: false });
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [isFound, setIsFound] = React.useState(true);
  const [result, setResult] = React.useState(savedMovies || []);

  const handleButtonClick = () => {
    if (values.title) {
      handleSubmit();
    } else {
      onEmptySearch();
    }
  };

  const handleCheckboxClick = (e) =>
    setValues({ ...values, short: e.target.checked });

  const handleFormChange = (value) => setValues({ ...values, title: value });

  const handleSubmit = () => {
    console.log(movies);
    setIsLoaded(false);

    const foundMovies = movies.filter((movie) =>
      filterMovie(movie, values.title, values.short)
    );

    setIsFound(foundMovies.length);
    setResult(foundMovies);

    setTimeout(() => setIsLoaded(true), 1500);
  };

  React.useEffect(() => {
    if (values.title || currenPath === '/saved-movies') {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <span>Ничего не найдено </span>
        )
      ) : (
        <Preloader />
      )}
    </main>
  );
}

export default Movies;
