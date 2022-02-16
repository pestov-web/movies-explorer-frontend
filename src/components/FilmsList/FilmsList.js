import './FilmsList.css';
import React from 'react';
import MoreButton from '../MoreButton/MoreButton';
import FilmsCard from '../FilmsCard/FilmsCard';
import { CARDS_NUMBER, MORE_CARDS, SCREEN_SIZE } from '../../utils/constants';
import localStorageHandler from '../../utils/LocalStorageHandler';

function FilmsList({ currenPath, movies, onSave, onRemove }) {
  const [cardsToShow, setCardsToShow] = React.useState([]);
  const [cardsPerPage, setCardsPerPage] = React.useState(0);
  const [nextCards, setNextCards] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const checkWindowWidth = () =>
    setTimeout(() => setWindowWidth(window.innerWidth), 500);

  const handleShowMoreCards = () =>
    setCardsToShow(movies.slice(0, cardsToShow.length + nextCards));

  React.useEffect(() => {
    window.addEventListener('resize', checkWindowWidth);

    if (windowWidth > SCREEN_SIZE.L) {
      setCardsPerPage(CARDS_NUMBER.L);
      setNextCards(MORE_CARDS.L);
    } else if (windowWidth > SCREEN_SIZE.S && windowWidth <= SCREEN_SIZE.L) {
      setCardsPerPage(CARDS_NUMBER.M);
      setNextCards(MORE_CARDS.M);
    } else if (windowWidth <= SCREEN_SIZE.S) {
      setCardsPerPage(CARDS_NUMBER.S);
      setNextCards(MORE_CARDS.S);
    }

    return () => window.removeEventListener('resize', checkWindowWidth);
  }, [windowWidth]);

  const checkSaved = (movie) => {
    const movieArray = localStorageHandler.get('savedMovies');
    const indexedData = new Map(movieArray.map((el) => [el.movieId, el]));

    console.log(
      movie.movieId.map((movieId) => indexedData.get(movieId)).filter((e) => e)
    );

    return true;
  };

  React.useEffect(() => {
    if (currenPath === '/movies') {
      setCardsToShow(movies.slice(0, cardsPerPage));
    } else {
      setCardsToShow(movies);
    }
  }, [cardsPerPage, currenPath, movies]);

  return (
    <section className="films">
      <ul className="films__cards">
        {' '}
        {cardsToShow.map((movie) => (
          <FilmsCard
            key={movie.movieId}
            currenPath={currenPath}
            movie={movie}
            onSave={onSave}
            onRemove={onRemove}
            isSaved={checkSaved(movie)}
          />
        ))}
      </ul>
      {currenPath === '/movies' && movies.length > cardsToShow.length && (
        <MoreButton onClick={handleShowMoreCards} />
      )}
    </section>
  );
}

export default FilmsList;
