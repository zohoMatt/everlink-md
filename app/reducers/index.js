// @flow
import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import { compileMarkdownReducer } from './compileMarkdownReducer';
import { toggleModal } from './toggleModal';
import { cursorReducer } from './cursorReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  markdown: compileMarkdownReducer,
  cursor: cursorReducer,
  modalType: toggleModal,
});

export default rootReducer;
