import { fetchMovieByName } from 'api';
import MovieList from 'components/MovieList';
import SearchForm from 'components/SearchForm';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const title = params.get('title') ?? '';

  const submitForm = value => {
    setParams({ title: value });
  };

  useEffect(() => {
    const searchFilms = async title => {
      try {
        setIsLoading(true);
        const res = await fetchMovieByName(title);
        setFilms(res);
      } catch {
        toast.error('Something went wrong! Reload page and try again!');
      } finally {
        setIsLoading(false);
      }
    };
    searchFilms(title);
  }, [title]);

  const { results } = films;

  return (
    <>
      <SearchForm title={title} submitForm={submitForm} />
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      {results?.length > 0 && <MovieList films={results} />}
    </>
  );
};

export default MoviesPage;
