import React from "react";
import { directors } from "../data";

function Directors() {
  
  const directorsList = directors.map((director) => (
    <div>
      <h3>Name: {director.name}</h3>
      <p>Movies:</p>
      <ul>
        {director.movies.map((movie) => (
          <li>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors;
