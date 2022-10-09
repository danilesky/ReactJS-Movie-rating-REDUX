import { createStore } from "redux";
import { ratingReducer } from "./rating.reducer";

export const store = createStore(ratingReducer);
