// @flow
import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import { compileMarkdownReducer } from './compileMarkdownReducer';
import { toggleModal } from './toggleModal';
import { cursorReducer } from './cursorReducer';
import { insertCodeReducer } from './insertCodeReducer';
import { scrollReducer } from './scrollingReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  markdown: compileMarkdownReducer,
  cursor: cursorReducer,
  scrollPercent: scrollReducer,
  modalType: toggleModal,
  modalCachedCode: insertCodeReducer
});

export default rootReducer;
