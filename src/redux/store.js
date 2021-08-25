import { createStore /*applyMiddleware*/ } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

// const reducer = (state = {}, action) => state;

const store = createStore(reducer, composeWithDevTools());

export default store;
