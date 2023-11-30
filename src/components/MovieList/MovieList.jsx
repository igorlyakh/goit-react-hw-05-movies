import { fetchTrendMovies } from 'api';
import MovieListItem from 'components/MovieListItem';
import React, { useEffect, useState } from 'react';

const MovieList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const res = await fetchTrendMovies();

      const { results } = res;

      setFilms(results);
    };

    getFilms();
  }, []);
  return (
    <ul>
      {films.map(({ title, id, name }) => {
        return <MovieListItem title={title || name} id={id} key={id} />;
      })}
    </ul>
  );
};

export default MovieList;
