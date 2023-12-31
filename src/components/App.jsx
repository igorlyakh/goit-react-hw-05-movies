import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';

const DetailMovie = lazy(() => import('pages/DetailMoviePage'));
const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const ReviewsList = lazy(() => import('components/ReviewList'));
const CastList = lazy(() => import('components/CastList'));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<DetailMovie />}>
            <Route path="cast" element={<CastList />} />
            <Route path="reviews" element={<ReviewsList />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
