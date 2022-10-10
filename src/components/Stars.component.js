import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteMovie } from "../state/movies.slice";
import { addRating } from "../state/ratings.slice";

const Star = styled(FaRegStar)`
  font-size: 30px;
  cursor: pointer;
  background: ${({ theme }) => (theme.hovered ? theme.hovered : "")};
`;

const Stars = ({ movie }) => {
  const [hover, setHover] = useState(-1);
  const dispatch = useDispatch();

  const hoverHandler = (index) => {
    setHover(index);
  };
  const addNewRating = (rate) => {
    dispatch(deleteMovie(movie));
    dispatch(addRating({ ...movie, rating: rate }));
  };
  return (
    <div>
      {[...Array(5)].map((item, index) => (
        <Star
          onMouseEnter={() => hoverHandler(index)}
          theme={index <= hover ? { hovered: "red" } : ""}
          onClick={() => addNewRating(index + 1)}
          onMouseLeave={() => setHover(-1)}
        />
      ))}
    </div>
  );
};

export default Stars;
