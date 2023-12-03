import { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'api';
import { RotatingLines } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import MovieList from 'components/MovieList';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getFilms = async () => {
      try {
        setIsLoading(true);
        const res = await fetchTrendMovies();
        const { results } = res;
        setFilms(results);
      } catch {
        toast.error('Something went wrong! Reload page and try again!');
      } finally {
        setIsLoading(false);
      }
    };

    getFilms();
  }, []);

  return (
    <>
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      <MovieList films={films} />
    </>
  );
};

export default HomePage;
