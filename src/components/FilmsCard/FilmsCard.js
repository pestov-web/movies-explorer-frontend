import React from 'react';
import './FilmsCard.css';
import { formatDuration } from '../../utils/Utils';

export default function FilmsCard({ movie, onSave, onRemove, isSaved }) {
  const { image, nameRU, duration, trailer } = movie;

  const [saved, setSaved] = React.useState(isSaved);

  const handleSave = () => {
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
        <button className="films__add-button films__add-button_checked button"></button>
        <time className="film__duration">{formatDuration(duration)}</time>
      </li>
    </>
  );
}
