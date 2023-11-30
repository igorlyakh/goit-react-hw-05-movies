import { fetchMovieById } from 'api';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const DetailInfo = () => {
  const [movie, setMovie] = useState([]);

  const location = useLocation();
  const { movieId } = useParams();

  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getFilmsData = async () => {
      try {
        const res = await fetchMovieById(movieId);
        setMovie(res);
      } catch {
        console.error('ERROR!');
      }
    };
    getFilmsData();
  }, [movieId]);

  const placeholder = 'https://placehold.co/400x600?text=Not+Found';

  const { original_title, vote_average, overview, genres, poster_path } = movie;

  return (
    <>
      <p>
        <Link to={backLink.current}>Back</Link>
      </p>
      <img
        width="400px"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : placeholder
        }
        alt={original_title}
      />
      <p>User Score: {vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      {genres && genres.map(item => <p key={item.id}>{item.name}</p>)}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default DetailInfo;
