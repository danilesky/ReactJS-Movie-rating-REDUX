const initialState = [];

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MOVIES":
      return action.payload;
    case "DELETE_MOVIE":
      return state.filter((movie) => movie.title !== action.payload.title);
    default:
      return state;
  }
};
