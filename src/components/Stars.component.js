import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styled from "styled-components";

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
      {[...Array(5)].map((item, index) => (
        <Star
          onMouseEnter={() => hoverHandler(index)}
          theme={index <= hover ? { hovered: "red" } : ""}
          onClick={() => addRating(index + 1)}
          onMouseLeave={() => setHover(-1)}
        />
      ))}
    </div>
  );
};

export default Stars;
