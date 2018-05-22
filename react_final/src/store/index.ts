import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { throttle } from "lodash";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../reducers/index";
import { watcherSaga } from "../middlewares";

export const loadFavourites = () => {
  try {
    const serializedState = localStorage.getItem("favourites");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const middleware = routerMiddleware(history);
const getInitialFavourites = (): any => {
  const favourites = loadFavourites();
  return { favourites };
};

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(middleware, sagaMiddleware));

export const store = createStore(rootReducer, getInitialFavourites(), enhancer);

store.subscribe(
  throttle(() => {
    try {
      localStorage.setItem(
        "favourites",
        JSON.stringify(store.getState().favourites)
      );
    } catch (e) {
      console.log(e);
    }
  }, 1000)
);

sagaMiddleware.run(watcherSaga);
