import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../apiServise/movies';
// import css from './MovieReviews.module.css';
import Loader from '../Loader/Loader';
export default function MovieReviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const reviews = await getMovieReviews(movieId);
        // console.log(reviews);
        setMovieReviews(reviews);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [movieId]);

  return (
    <div>
      {movieReviews && movieReviews.length > 0 ? (
        movieReviews.map(review => (
          <div key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p>We do not have any reviews for this movie.</p>
      )}
      {isLoading && <Loader />}
      {isError && <p>No data to display... Try again...</p>}
    </div>
  );
}
