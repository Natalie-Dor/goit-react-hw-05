import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';
import { getMovieCredits } from '../../apiServise/movies';
import Loader from '../Loader/Loader';
export default function MovieCast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const cast = await getMovieCredits(movieId);
        setMovieCast(cast);
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
      <p>Cast</p>
      {movieCast.map(actor => (
        <div key={actor.id}>
          <img
            className={css.image}
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </div>
      ))}
      {isLoading && <Loader />}
      {isError && <p>Try again...</p>}
    </div>
  );
}
