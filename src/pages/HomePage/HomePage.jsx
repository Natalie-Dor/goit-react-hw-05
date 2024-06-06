import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../apiServise/movies';
// import css from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
export default function HomePage() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const results = await getTrendingMovies();
        console.log(results);
        setTrendingMovies(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, []);
  return (
    <section>
      <h2>Trending today</h2>
      {trendingMovies.length > 0 && <MovieList movies={trendingMovies} />}
      {isLoading && <Loader />}
      {isError && <p>No movie... Try again...</p>}
    </section>
  );
}
