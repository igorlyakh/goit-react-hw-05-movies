import { fetchMovieReviews } from 'api';
import ReviewListItem from 'components/ReviewListItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsList = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await fetchMovieReviews(movieId);
        setReviews(res);
      } catch {
        console.error('ERROR!');
      }
    };
    getReviews();
  }, [movieId]);
  const { results } = reviews;
  return (
    <>
      {results?.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      <ul>
        {results?.map(({ author, content, id }) => {
          return <ReviewListItem author={author} content={content} key={id} />;
        })}
      </ul>
    </>
  );
};

export default ReviewsList;
