import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import configureStore from "./Configuration/store";
import history from "./Configuration/history";
import initialState from "./Configuration/initialState";
import initializeLocalStorage from "./Configuration/localStorageUtil";
import { ConnectedRouter } from "react-router-redux";

import registerServiceWorker from "./registerServiceWorker";

const store = configureStore(initialState, history);

initializeLocalStorage();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App store={store} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
