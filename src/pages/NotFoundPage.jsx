import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <h2
        style={{
          textAlign: 'center',
        }}
      >
        404! Page not found!
      </h2>
    </div>
  );
};

export default NotFoundPage;
