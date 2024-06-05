// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { getSearchMovie } from '../../apiServise/movies';
// import css from './MoviesPage.module.css';
// import MovieList from '../../components/MovieList/MovieList';
// import Loader from '../../components/Loader/Loader';
export default function MoviesPage() {
  return <h2>Movie...</h2>;
}
// import css from './MoviesPage.module.css';
// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import Loader from '../../components/Loader/Loader';
// import MovieList from '../../components/MovieList/MovieList';
// import { getSearchMovie } from '../../apiServise/movies';
// // import axios from 'axios';
// export default function MoviesPage() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [inputValue, setInputValue] = useState(searchParams.get('query') || '');
//   const [filteredMovies, setFilteredMovies] = useState([]);
//   const [, setShowResults] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   const handleInputChange = event => {
//     setInputValue(event.target.value);
//   };

//   const handleSearchSubmit = event => {
//     event.preventDefault();
//     setSearchParams({ query: inputValue });
//     setShowResults(true);
//   };

//   useEffect(() => {
//     const searchMovie = searchParams.get('query');
//     if (!searchMovie) return;

//     const searchMovies = async () => {
//       try {
//         setIsLoading(true);
//         setIsError(false);
//         const response = await getSearchMovie();
//         console.log(response.data.results);
//         setFilteredMovies(response.data.results);
//       } catch (error) {
//         setIsError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     searchMovies();
//   }, [searchParams]);

//   return (
//     <div>
//       <form onSubmit={handleSearchSubmit}>
//         <div className={css.div}>
//           <input
//             className={css.input}
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//           />
//           <button className={css.button} type="submit">
//             Search movie
//           </button>
//         </div>
//       </form>
//       <MovieList movies={filteredMovies} />
//       {isLoading && <Loader />}
//       {isError && <p>No movie... Try again...</p>}
//     </div>
//   );
// }
