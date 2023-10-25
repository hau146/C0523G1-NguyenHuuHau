import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/rootReducer";
const middleware = [thunk];
export const store = createStore(rootReducer, {}, applyMiddleware(...middleware));