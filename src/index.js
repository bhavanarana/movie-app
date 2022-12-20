import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";
//curry function logger(obj, next, action)
//logger(obj)(next)(action)
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log("ACTION_TYPE = ", action.type);
//       next(action);
//     };
//   };
// };
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log("ACTION_TYPE = ", action.type), next(action);
  };
const store = createStore(rootReducer, applyMiddleware(logger));
// console.log("before state", store.getState());
// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Superman" }],
// });
// console.log("after state", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App store={store} />);

// middleware
//why reducer is pure function
//toolit
//flux, redux persist
