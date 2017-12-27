// @flow
import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import { compileMarkdownReducer } from './compileMarkdownReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  compiledContent: compileMarkdownReducer
});

export default rootReducer;
