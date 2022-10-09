const initialState = [];

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MOVIES":
      return action.payload;
    default:
      return state;
  }
};
