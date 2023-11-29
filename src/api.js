import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = new URLSearchParams({
  api_key: '9cc860df4c5a2dfba823744e561a2dde',
});

export const fetchTrendMovies = async () => {
  const res = await axios(`trending/all/day?${options}`);
  return await res.data;
};

export const fetchMovieByName = async name => {
  const res = await axios(`search/movie?${options}&query=${name}`);
  return await res.data;
};

export const fetchMovieById = async id => {
  const res = await axios(`movie/${id}?${options}`);
  return await res.data;
};

export const fetchMovieCredits = async id => {
  const res = await axios(`movie/${id}/credits?${options}`);
  return res.data;
};

export const fetchMovieReviews = async id => {
  const res = await axios(`movie/${id}/reviews?${options}`);
  return res.data;
};
