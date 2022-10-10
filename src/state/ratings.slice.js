import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ratings: [],
};

export const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    addRating: (state, action) => {
      return {
        ...state,
        ratings: [...state.ratings, action.payload],
      };
    },
  },
});
