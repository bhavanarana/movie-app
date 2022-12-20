import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";
const store = createStore(rootReducer);
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
