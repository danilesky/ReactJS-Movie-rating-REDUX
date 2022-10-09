import { movies } from "./movies.mock";

export const moviesRequest = () => {
  return new Promise((resolve, reject) => {
    const moviesList = movies.list;
    if (!moviesList) {
      reject("not found");
    }
    setTimeout(() => resolve(moviesList), 300);
  });
};
