import {
  ADD_MOVIES,
  ADD_FAVOURITES,
  REMOVE_FAVOURITES,
  SET_SHOW_FAVOURITES,
  ADD_MOVIE_TO_LIST,
  ADD_SEARCH_RESULT,
} from "./actionType";
//action creators: sync
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    // movies: movies,
    movies,
  };
}
export const addFavourites = (movie) => {
  return {
    type: ADD_FAVOURITES,
    movie,
  };
};
export const removeFavourites = (movie) => {
  return {
    type: REMOVE_FAVOURITES,
    movie,
  };
};
export const setShowFavourites = (val) => {
  return {
    type: SET_SHOW_FAVOURITES,
    val,
  };
};
export const addMovieToList = (movie) => {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
};
export const handleMovieSearch = (movie) => {
  const url = ` http://www.omdbapi.com/?apikey=b87dfec5&t=${movie}`;
  //thunk function
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);
        //dispatch an action
        dispatch(addMovieSearchResult(movie));
      });
  };
};
export const addMovieSearchResult = (movie) => {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
};
