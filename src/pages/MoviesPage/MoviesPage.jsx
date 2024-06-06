import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from '../../apiServise/movies';
import css from './MoviesPage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
// export default function MoviesPage() {
//   return <h2>Movie...</h2>;
// }

export default function MoviesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.search.value.trim() === '') {
      toast.error('Enter your query!');
      setSearchParams({});
      return;
    }
    setSearchParams({
      query: e.target.search.value.trim().toLowerCase(),
    });
    e.target.reset();
    setSearchMovies([]);
  };

  useEffect(() => {
    if (!searchMovie) return;
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getSearchMovie(searchParams);
        console.log(data);
        setSearchMovies(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    asyncWrapper();
  }, [searchParams, searchMovie]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className={css.input} type="text" name="search" />
        <button className={css.button} type="submit">
          Search movie
        </button>
      </form>
      {searchMovies.length > 0 ? (
        <MovieList movies={searchMovies} />
      ) : (
        <p>Enter a new request!</p>
      )}
      <Toaster />
      {isLoading && <Loader />}
      {isError && <p>No movie... Try again...</p>}
    </div>
  );
}
