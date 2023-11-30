import React from 'react';
import { Link } from 'react-router-dom';

const MovieListItem = ({ title, id }) => {
  return (
    <li>
      <Link to={`movies/${id}`}>{title}</Link>
    </li>
  );
};

export default MovieListItem;
