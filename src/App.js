import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieProfile from "./components/MovieProfile.component";
import { moviesRequest } from "./services/movies.service";

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
    <div className="App">
      {state.movies[0] ? <MovieProfile movie={state.movies[0]} /> : "No movies"}
    </div>
  );
}

export default App;
