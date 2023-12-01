import MovieListItem from 'components/MovieListItem';

const MovieList = ({ films }) => {
  return (
    <ul>
      {films.map(({ title, id }) => {
        return <MovieListItem title={title} id={id} key={id} />;
      })}
    </ul>
  );
};

export default MovieList;
