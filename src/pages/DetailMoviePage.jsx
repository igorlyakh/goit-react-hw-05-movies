import DetailInfo from 'components/DetailInfo';
import React from 'react';
import { Outlet } from 'react-router-dom';

const DetailMovie = () => {
  return (
    <>
      <DetailInfo />
      <Outlet />
    </>
  );
};

export default DetailMovie;
