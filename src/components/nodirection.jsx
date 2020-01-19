import React from "react";
import { useLocation } from "react-router-dom";

const NoMatch = () => {
  let location = useLocation();
  return (
    <div>
      <h2>Error 404</h2>
      <p>Page not found.</p>
      <small>Current location: <code>{location.pathname}</code></small>
    </div>
  )
}

export default NoMatch;