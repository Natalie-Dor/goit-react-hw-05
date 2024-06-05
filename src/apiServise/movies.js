import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 20,
};
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTVjNTM3NTYxMzNjY2RiYTY5OWIwN2NmMmQ5YmE4ZSIsInN1YiI6IjY2NWI0MzQxZTJkNzA0NGJiNTQ3ZTA5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IITZYDh-x2wc2Btm6Po97qcqVrqpFiPW0ZI0GwxxFGQ',
  },
};
// https://api.themoviedb.org/3/trending/movie/{time_window}
// // trending/movie/day?language=en-US
export const getTrendingMovies = async () => {
  const response = await axios.get(
    `trending/movie/day?language=en-US`,
    options
  );
  return response.data.results;
};
// .results
// // https://api.themoviedb.org/3/search/movie
// export const getSearchMovie = async (query, page) => {
//   const response = await axios.get(
//     `search/movie?${query}&include_adult=false&language=en-US&page=${page}`,
//     options
//   );
//   return response.data;
// };
//movie/{movie_id}
export const getMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}?language=en-US`, options);
  return response.data;
  // .results
};
// // movie/{movie_id}/credits
// export const getMovieCredits = async id => {
//   const response = await axios.get(
//     `movie/${id}/credits?language=en-US`,
//     options
//   );
//   return response.data;
// };
// // movie/{movie_id}/reviews
// export const getMovieReviews = async (id, page) => {
//   const response = await axios.get(
//     `movie/${id}/reviews?language=en-US&page=${page}`,
//     options
//   );
//   return response.data;
// };

//

// trending/movie/day?language=en-US
// export const getMovies = async () => {
//   const response = await axios.get(
//     `trending/movie/day?language=en-US`,
//     options
//   );

//   return response.data.results;
// };
// https://api.themoviedb.org/3/movie/{movie_id}
// export const getMovieDetails = async ({ movieId }) => {
//   const response = await axios.get(`movie/${movieId}?language=en-US`, options);
//   console.log(response.data.results);
//   return response.data.results;
// };
