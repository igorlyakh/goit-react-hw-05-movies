import { fetchMovieCredits } from 'api';
import CastListItem from 'components/CastListItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CastList = () => {
  const { movieId } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const res = await fetchMovieCredits(movieId);
        setCasts(res);
      } catch {
        console.error('ERROR!');
      }
    };
    getCast();
  }, [movieId]);
  const { cast } = casts;
  return (
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
  );
};

export default CastList;
