import { fetchMovieByName } from 'api';
import MovieList from 'components/MovieList';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
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
      const res = await fetchMovieByName(title);
      setFilms(res);
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

      {results?.length > 0 && <MovieList films={results} />}
    </>
  );
};

export default MoviesPage;
