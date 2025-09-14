import React from "react";
import { useRouteError , NavLink } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <div>
        <h1>opps an error ocuured</h1>
        {error && <p>{ error.data}</p>}
     <NavLink to='/'>
        <button >go home </button>
        </NavLink>
      </div>
    </>
  );
};

export default ErrorPage;