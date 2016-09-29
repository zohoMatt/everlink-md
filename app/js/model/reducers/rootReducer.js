/**
 * Created by Zoho on 16/9/28.
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import { compileMarkdownReducer as textContent } from './compileMarkdownReducer';

/******************** Data Structure of Store *******************/
export const DEFAULT_STORE = {
	textContent: '# EverlinkMD'
};

/**********************************************************************************/

// Combine reducers. Also reveal the data structure of store.
const reducer = combineReducers({
	routing,
	textContent
});

export default reducer;
