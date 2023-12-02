import { fetchMovieCredits } from 'api';
import CastListItem from 'components/CastListItem';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

const CastList = () => {
  const { movieId } = useParams();

  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      try {
        setIsLoading(true);
        const res = await fetchMovieCredits(movieId);
        setCasts(res);
      } catch {
        toast.error('Something went wrong! Reload page and try again!');
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);
  const { cast } = casts;
  return (
    <>
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="46"
          visible={true}
        />
      )}
      <ul>
        {cast?.map(({ name, character, profile_path, id }) => {
          return (
            <CastListItem
              name={name}
              character={character}
              profile_path={profile_path}
              key={id}
            />
          );
        })}
      </ul>
    </>
  );
};

export default CastList;
