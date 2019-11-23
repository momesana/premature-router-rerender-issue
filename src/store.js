import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { createReduxHistoryContext } from "redux-first-history";

export const history = createBrowserHistory();

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({
  history
});

// pseudo-reducer as we pretty much solely rely on the preloaded state for issues
const issueListReducer = (state = [], action) => state;

export default function configureStore(preloadedState) {
  const store = createStore(
    combineReducers({
      router: routerReducer,
      issues: issueListReducer
    }),
    preloadedState,
    compose(applyMiddleware(routerMiddleware))
  );

  return {
    history: createReduxHistory(store),
    store
  };
}
