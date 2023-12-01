import MovieListItem from 'components/MovieListItem';

const MovieList = ({ films }) => {
  return (
    <ul>
      {films.map(({ title, id, name }) => {
        return <MovieListItem title={title || name} id={id} key={id} />;
      })}
    </ul>
  );
};

export default MovieList;
