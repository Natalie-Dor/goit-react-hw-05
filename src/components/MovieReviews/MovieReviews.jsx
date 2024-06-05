// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// // import axios from 'axios';
// import { getMovieReviews } from '../../apiServise/movies';
// import css from './MovieReviews.module.css';
// import Loader from '../Loader/Loader';
// export default function MovieReviews() {
//   const { movieId } = useParams();
//   const [movieReviews, setMovieReviews] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   useEffect(() => {
//     const fetchMovieReviews = async () => {
//       try {
//         setIsLoading(true);
//         setIsError(false);
//         const response = await getMovieReviews();
//         setMovieReviews(response.data.results);
//       } catch (error) {
//         setIsError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (movieId) {
//       fetchMovieReviews();
//     }
//   }, [movieId]);
//   // if (isLoading) return <Loader />;
//   // if (isError) return <p>Something went wrong.</p>;

//   return (
//     <div>
//       {movieReviews && movieReviews.length > 0 ? (
//         movieReviews.map(review => (
//           <div className={css.review} key={review.id}>
//             <p className={css.p}>Author: {review.author}</p>
//             <p>{review.content}</p>
//           </div>
//         ))
//       ) : (
//         <p className={css.withoutReviews}>
//           We do not have any reviews for this movie.
//         </p>
//       )}
//       {isLoading && <Loader />}
//       {isError && <p>No data to display... Try again...</p>}
//     </div>
//   );
// }
export default function MovieReviews() {
  return (
    <div>
      <p>Sorry Please</p>
    </div>
  );
}
