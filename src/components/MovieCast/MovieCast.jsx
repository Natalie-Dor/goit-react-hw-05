// // import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import css from './MovieCast.module.css';
// import { getMovieCredits } from '../../apiServise/movies';
// import Loader from '../Loader/Loader';
// export default function MovieCast() {
//   const { movieId } = useParams();
//   const [movieCast, setMovieCast] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     const fetchMovieCast = async () => {
//       try {
//         setIsLoading(true);
//         setIsError(false);
//         const response = await getMovieCredits(movieId);
//         setMovieCast(response.data.cast);
//       } catch (error) {
//         setIsError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (movieId) {
//       fetchMovieCast();
//     }
//   }, [movieId]);

//   return (
//     <div className={css.divMovieCast}>
//       {movieCast.map(actor => (
//         <div className={css.actor} key={actor.id}>
//           <img
//             src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
//             alt={actor.name}
//           />
//           <p>{actor.name}</p>
//           <p>Character: {actor.character}</p>
//         </div>
//       ))}
//       {isLoading && <Loader />}
//       {isError && <p>Try again...</p>}
//     </div>
//   );
// }
export default function MovieCast() {
  return (
    <div>
      <p>Sorry, page not found! Please</p>
    </div>
  );
}
