import { fetchMovieByName } from 'api';
import MovieList from 'components/MovieList';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const title = params.get('title') ?? '';

  const formik = useFormik({
    initialValues: {
      title: title,
    },
    onSubmit: (values, { resetForm }) => {
      setParams({ title: values.title });
      resetForm();
    },
  });

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
      <form onSubmit={formik.handleSubmit}>
        <input
          name="title"
          type="text"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <button type="submit">Search</button>
      </form>
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
