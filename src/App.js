import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesRequest } from "./services/movies.service";

function App() {
  const state = useSelector((state) => state);
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    moviesRequest()
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addRating = () => {
    dispatch({
      type: "ADD_RATING",
      payload: { title: "Harry Potter", rating: 3 },
    });
  };

  return (
    <div className="App">
      <button onClick={addRating}>Add rating</button>
      <p>
        {state.ratings.map((rating) => (
          <div>
            <p>{rating.title}</p>
            <p>{rating.rating}</p>
          </div>
        ))}
      </p>
    </div>
  );
}

export default App;
