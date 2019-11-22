import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

// pseudo-reducer as we pretty much solely rely on the preloaded state for issues
const issueListReducer = (state = [], action) => state;

export default function configureStore(preloadedState) {
  const store = createStore(
    combineReducers({
      router: connectRouter(history),
      issues: issueListReducer
    }),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history)))
  );

  return store;
}
