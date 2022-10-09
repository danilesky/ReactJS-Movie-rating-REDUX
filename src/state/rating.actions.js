export const addRating = (state, newValue) => {
  return {
    ...state,
    ratings: [...state.ratings, newValue],
  };
};
