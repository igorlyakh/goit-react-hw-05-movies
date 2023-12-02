import { fetchMovieById } from 'api';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';
import { Link, useLocation, useParams } from 'react-router-dom';

const DetailInfo = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const { movieId } = useParams();

  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getFilmsData = async () => {
      try {
        setIsLoading(true);
        const res = await fetchMovieById(movieId);
        setMovie(res);
      } catch {
        toast.error('Something went wrong! Reload page and try again!');
      } finally {
        setIsLoading(false);
      }
    };
    getFilmsData();
  }, [movieId]);

  const PLACEHOLDER = 'https://placehold.co/400x600?text=Not+Found';

  const { original_title, vote_average, overview, genres, poster_path } = movie;

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
      <p>
        <Link to={backLink.current}>Back</Link>
      </p>
      <img
        width="400px"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : PLACEHOLDER
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
