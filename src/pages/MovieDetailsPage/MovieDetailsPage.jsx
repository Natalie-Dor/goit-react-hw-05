import { useEffect, useState, useRef, Suspense } from 'react';
import {
  NavLink,
  Link,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import { getMovieDetails } from '../../apiServise/movies';
import css from './MovieDetailsPage.module.css';
import Loader from '../../components/Loader/Loader';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
// import { GoBackBtn } from '../../components/GoBackBtn/GoBackBtn';
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getMovieDetails(movieId);
        // console.log(data);
        setMovieDetails(data);
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
      {/* <GoBackBtn /> */}
      {/* не працює */}
      <b>
        <Link to={backLinkRef.current}>Go back</Link>
        {movieDetails && <MovieInfo movie={movieDetails} />}
      </b>
      <b>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </b>
      <Suspense className={css.loading} fallback={<div>Loading info...</div>}>
        <Outlet />
      </Suspense>
      {isLoading && <Loader />}
      {isError && <p>No movie... Try again...</p>}
    </div>
  );
}
