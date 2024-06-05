import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';
// import { Route, Routes } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
// import css from './App.module.css';
// const Navigation = lazy(() => import('../Navigation/Navigation'));
// const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
// const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
// const MovieDetailsPage = lazy(() =>
//   import('../../pages/MovieDetailsPage/MovieDetailsPage')
// );
// const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
// const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));
// const NotFoundPage = lazy(() =>
//   import('../../pages/NotFoundPage/NotFoundPage')
// );

export default function App() {
  return (
    <div>
      <header className={css.header}>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
//  <Suspense className={css.loading} fallback={<div>Loading page...</div>}>
