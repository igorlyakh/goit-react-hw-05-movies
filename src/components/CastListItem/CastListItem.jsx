import React from 'react';

const CastListItem = ({ name, character, profile_path }) => {
  const IMG_URL = 'http://image.tmdb.org/t/p/w500';
  const PLACEHOLDER = 'https://placehold.co/400x600?text=Not+Found';
  return (
    <li>
      <img
        width="200"
        src={profile_path ? `${IMG_URL}${profile_path}` : PLACEHOLDER}
        alt={name}
      />
      <h3>{name}</h3>
      <p>{character}</p>
    </li>
  );
};

export default CastListItem;
