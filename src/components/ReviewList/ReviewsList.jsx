import { fetchMovieReviews } from 'api';
import ReviewListItem from 'components/ReviewListItem';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

const ReviewsList = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const res = await fetchMovieReviews(movieId);
        setReviews(res);
      } catch {
        toast.error('Something went wrong! Reload page and try again!');
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);
  const { results } = reviews;
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
