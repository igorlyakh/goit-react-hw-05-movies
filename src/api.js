import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = new URLSearchParams({
  api_key: '9cc860df4c5a2dfba823744e561a2dde',
  language: 'en-US',
});

export const fetchTrendMovies = async () => {
  const res = await axios('trending/movie/day', {
    params: options,
  });
  return await res.data;
};

export const fetchMovieByName = async name => {
  const res = await axios(`search/movie?query=${name}`, {
    params: options,
  });
  return await res.data;
};

export const fetchMovieById = async id => {
  const res = await axios(`movie/${id}`, {
    params: options,
  });
  return await res.data;
};

export const fetchMovieCredits = async id => {
  const res = await axios(`movie/${id}/credits`, {
    params: options,
  });
  return res.data;
};

export const fetchMovieReviews = async id => {
  const res = await axios(`movie/${id}/reviews`, {
    params: options,
  });
  return res.data;
};
