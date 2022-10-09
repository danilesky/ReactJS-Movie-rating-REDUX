import { combineReducers, createStore } from "redux";
import { moviesReducer } from "./movies.reducer";
import { ratingReducer } from "./rating.reducer";

export const combinedReducers = combineReducers({
  movies: moviesReducer,
  ratings: ratingReducer,
});

export const store = createStore(combinedReducers);
