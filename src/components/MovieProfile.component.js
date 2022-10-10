import React from "react";
import styled from "styled-components";
import Stars from "./Stars.component";

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Picture = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 300px;
  object-fit: cover;
  box-shadow: 14px 15px 80px -42px rgba(0, 0, 0, 0.75);
`;

const Title = styled.div`
  font-size: 43px;
  letter-spacing: -0.04em;
  line-height: 48px;
  color: #003566;
  font-weight: 600;
`;

const MovieProfile = ({ movie }) => {
  return (
    <Profile>
      <Picture src={movie.img} alt={movie.title} />
      <Title>{movie.title}</Title>
      <Stars movie={movie} />
    </Profile>
  );
};

export default MovieProfile;
