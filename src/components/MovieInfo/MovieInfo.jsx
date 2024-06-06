import css from './MovieInfo.module.css';
export default function MovieInfo({ movie }) {
  return (
    <div className={css.container}>
      <img
        className={css.image}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={css.wrapper}>
        <h2>{movie.title}</h2>
        <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
        <p>Overview:{movie.overview}</p>
        <p>
          Genres:
          {movie.genres !== undefined &&
            movie.genres.map(ganre => ganre.name).join(', ')}
        </p>
      </div>
    </div>
  );
}
