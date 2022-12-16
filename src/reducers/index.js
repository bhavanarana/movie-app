export default function movies(state = [], action) {
  if (action.type === "ADD_MOVIES") {
    return action.movies; // it return a new state
  }
  return state;
}
