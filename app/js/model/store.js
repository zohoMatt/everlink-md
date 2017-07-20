/**
 * Created by Zoho on 16/9/28.
 */
import {applyMiddleware, createStore, compose} from 'redux';

// Data store
import {DEFAULT_STORE} from "./store/developerSpecifiedData";
// Reducer
import reducer from './reducers/rootReducer';
// Middleware
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

// Middleware
// with logger and debug tool
const debugMiddleware = compose(
	applyMiddleware(promise(), thunk),
	window.devToolsExtension ? window.devToolsExtension() : x => x
);
// without any log or tools
const distMiddleware = applyMiddleware(promise(), thunk);

// Create store
const store = createStore(reducer, DEFAULT_STORE, debugMiddleware);
export default store;
