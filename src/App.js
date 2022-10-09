import { useDispatch, useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

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
