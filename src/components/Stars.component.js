import React from "react";
import { FaRegStar } from "react-icons/fa";
import { useDispatch } from "react-redux";

const Stars = ({ movie }) => {
  const dispatch = useDispatch();
  const addRating = (rate) => {
    dispatch({
      type: "DELETE_MOVIE",
      payload: movie,
    });
    dispatch({
      type: "ADD_RATING",
      payload: { ...movie, rating: rate },
    });
  };
  return (
    <div>
      <FaRegStar onClick={() => addRating(1)} />
      <FaRegStar onClick={() => addRating(2)} />
      <FaRegStar onClick={() => addRating(3)} />
      <FaRegStar onClick={() => addRating(4)} />
      <FaRegStar onClick={() => addRating(5)} />
    </div>
  );
};

export default Stars;
