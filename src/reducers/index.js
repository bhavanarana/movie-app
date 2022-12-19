import {
  ADD_MOVIES,
  ADD_FAVOURITES,
  REMOVE_FAVOURITES,
  SET_SHOW_FAVOURITES,
} from "../actions";
const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};
export default function movies(state = initialMoviesState, action) {
  // if (action.type === ADD_MOVIES) {
  //   return {
  //     ...state,
  //     list: action.movies,
  //   }; // it return a new state
  // }
  // return state;
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
