import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    issues: function(state = [], action) {
        return state;
    }
  });
export default createRootReducer;
