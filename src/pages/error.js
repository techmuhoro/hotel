import React from 'react';
import { Link } from 'react-router-dom';

const error = () => {
  return (
    <div>
      <h1>Error 404, This page was no fond</h1>
      <Link to='/'>Back home</Link>
    </div>
  );
};

export default error;
