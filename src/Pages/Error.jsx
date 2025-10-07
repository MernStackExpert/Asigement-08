import React from 'react';
import { useRouteError } from 'react-router';

const Error = () => {
  const error = useRouteError()

  return <div>{error.message}</div>
};

export default Error;