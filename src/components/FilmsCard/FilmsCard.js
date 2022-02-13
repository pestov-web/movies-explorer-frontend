import React from 'react';
import './FilmsCard.css';
import { formatDuration } from '../../utils/Utils';

export default function FilmsCard({
  currenPath,
  movie,
  onSave,
  onRemove,
  isSaved,
}) {
  const { image, nameRU, duration, trailer } = movie;

  const [saved, setSaved] = React.useState(isSaved);

  // проверяем поля фильма
  const checkMovie = (movie) => {
    const keys = Object.keys(movie);

    keys.forEach((key) => {
      console.log(`${key} : ${movie[key]}`);
    });
  };

  const handleSave = () => {
    checkMovie(movie);
    onSave(movie);
    setSaved(true);
  };

  const handleRemove = () => {
    onRemove(movie);
    setSaved(false);
  };

  return (
    <>
      <li className="films__card">
        <img src={image} alt={nameRU} className="films__image" />
        <h2 className="films__title">{nameRU}</h2>
        {currenPath === '/saved-movies' ? (
          <button
            onClick={handleRemove}
            className="films__add-button films__add-button_checked button"
          />
        ) : saved ? (
          <button
            onClick={handleRemove}
            className="films__add-button films__add-button_checked button"
          />
        ) : (
          <button onClick={handleSave} className="films__add-button button" />
        )}

        <time className="film__duration">{formatDuration(duration)}</time>
      </li>
    </>
  );
}
