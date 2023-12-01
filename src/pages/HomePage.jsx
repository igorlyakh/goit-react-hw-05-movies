import { lazy, useEffect, useState } from 'react';
import { fetchTrendMovies } from 'api';

const MovieList = lazy(() => import('components/MovieList'));

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const res = await fetchTrendMovies();
        const { results } = res;
        setFilms(results);
      } catch {
        console.error('ERROR!');
      }
    };

    getFilms();
  }, []);

  return (
    <>
      <MovieList films={films} />
    </>
  );
};

export default HomePage;
