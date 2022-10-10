import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MovieProfile from "./components/MovieProfile.component";
import { moviesRequest } from "./services/movies.service";

const Body = styled.div`
  height:100vh
  width:100vw;
  display:flex;
  align-items:center;
  justify-content:center;
  background: #ffd700;
  margin:0;
`;

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  useEffect(() => {
    moviesRequest()
      .then((data) => {
        dispatch({ type: "UPDATE_MOVIES", payload: data });
      })
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <Body>
      {state.movies[0] ? <MovieProfile movie={state.movies[0]} /> : "No movies"}
    </Body>
  );
}

export default App;
