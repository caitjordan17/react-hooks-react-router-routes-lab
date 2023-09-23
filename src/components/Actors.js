import React from "react";
import { actors } from "../data";

function Actors() {
  
  const actorsList = actors.map((actor) => (
    <div>
      <h3>Name: {actor.name}</h3>
      <p>Movies:</p>
      <ul>
        {actor.movies.map((movie) => (
          <li>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
}

export default Actors;
