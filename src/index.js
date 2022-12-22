import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";
//curry function logger(obj, next, action)
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      console.log("ACTION_TYPE = ", action.type);
    }
    next(action);
  };
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export const StoreContext = createContext();

class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // pass store to provider componet
  //provider as a compoent so that other component act as a child(e.g App) and we can pass values to it
  <Provider store={store}>
    <App />
  </Provider>
);
