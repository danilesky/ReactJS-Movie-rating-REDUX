const initialState = {
  ratings: [],
};

export const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RATING":
      return {
        ...state,
        ratings: [...state.ratings, action.payload],
      };
    default:
      return state;
  }
};
