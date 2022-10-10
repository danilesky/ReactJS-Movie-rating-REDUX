import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    updateMovies: (state, action) => {
      return action.payload;
    },
    deleteMovie: (state, action) => {
      return state.filter((movie) => movie.title !== action.payload.title);
    },
  },
});
