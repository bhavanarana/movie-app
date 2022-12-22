import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_FAVOURITES,
  REMOVE_FAVOURITES,
  SET_SHOW_FAVOURITES,
  ADD_SEARCH_RESULT,
} from "../actions";
const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};
export function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites], //remaining movies come over spread operator
      };
    case REMOVE_FAVOURITES:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val, //true/false
      };
    default:
      return state;
  }
}
const initialSearchState = {
  result: {},
};
export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
      };
    default:
      return state;
  }
}
const initialRootState = {
  movies: initialMoviesState,
  search: initialSearchState,
};
// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }
export default combineReducers({
  movies: movies,
  search, // shorthand of search: search
});
