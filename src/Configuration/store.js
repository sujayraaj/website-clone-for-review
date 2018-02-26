import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./rootSaga";
import combinedReducers from "./combinedReducers";

import { routerMiddleware } from "react-router-redux";

export const configureStore = (initialState = {}, history) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const rMiddleWare = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();

  const middleWares = [sagaMiddleware, rMiddleWare];

  const store = createStore(
    combinedReducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleWares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
