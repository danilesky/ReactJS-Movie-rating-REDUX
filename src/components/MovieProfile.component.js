import React from "react";
import { useDispatch } from "react-redux";
import Stars from "./Stars.component";

const MovieProfile = ({ movie }) => {
  return (
    <div>
      <img src={movie.img} alt={movie.title} />
      <h1>{movie.title}</h1>
      <Stars movie={movie} />
    </div>
  );
};

export default MovieProfile;
