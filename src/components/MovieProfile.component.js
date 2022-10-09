import React from "react";
import { useDispatch } from "react-redux";

const MovieProfile = ({ movie }) => {
  const dispatch = useDispatch();
  const removeMovie = () => {
    dispatch({
      type: "DELETE_MOVIE",
      payload: movie,
    });
  };
  return (
    <div>
      <img src={movie.img} alt={movie.title} />
      <h1>{movie.title}</h1>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button onClick={removeMovie}>remove</button>
    </div>
  );
};

export default MovieProfile;
