import { NavLink, Outlet, useParams } from 'react-router-dom';
// import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// Suspense,
import { getMovieDetails } from '../../apiServise/movies';
// import css from './MovieDetailsPage.module.css';
import Loader from '../../components/Loader/Loader';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
// import { GoBackBtn } from '../../components/GoBackBtn/GoBackBtn';
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getMovieDetails(movieId);
        console.log(data);
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
      <h2>details {movieId}</h2>
      {movieDetails && <MovieInfo movie={movieDetails} />}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
      {isLoading && <Loader />}
      {isError && <p>No movie... Try again...</p>}
    </div>
  );
}

// export default function MovieDetailsPage() {

//   const location = useLocation();
//   // const fromLocation = useRef(location.state?.from ?? '/');

//   return (
//     <div>
//
// <div className={css.listAdditionalInfo}>
//   <li className={css.additionalInfo}>Additional information</li>
//   <nav className={css.navLink}>
//     <NavLink to="cast" state={{ from: location.state?.from }}>
//       Cast
//     </NavLink>
//     <NavLink to="reviews" state={{ from: location.state?.from }}>
//       Reviews
//     </NavLink>
//   </nav>
// </div>
//       <Suspense fallback={<div>Loading sub component...</div>}>
//         <Outlet />
//       </Suspense>

//     </div>
//   );
// }

// <h3>Additional information</h3>
// <ul className={css.wrapper}>
//   <li className={css.item}>
//     <NavLink to="cast">Cast</NavLink>
//   </li>
//   <li className={css.item}>
//     <NavLink to="reviews">Reviews</NavLink>
//   </li>
// </ul>
//       <Outlet />
//     </div>
//   );
// }
