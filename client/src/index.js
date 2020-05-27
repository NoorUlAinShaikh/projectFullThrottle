import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import "./index.css";

const store = createStore(reducers, applyMiddleware(reduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
