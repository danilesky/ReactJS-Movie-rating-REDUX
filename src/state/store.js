import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies.slice";
import ratingReducer from "./ratings.slice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    ratings: ratingReducer,
  },
});
