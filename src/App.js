import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesRequest } from "./services/movies.service";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    moviesRequest()
      .then((data) => {
        dispatch({ type: "UPDATE_MOVIES", payload: data });
      })
      .catch((err) => console.log(err));
  }, [dispatch]);
  return <div className="App"></div>;
}

export default App;
