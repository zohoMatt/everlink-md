/**
 * Created by Zoho on 16/9/28.
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import { compileMarkdownReducer as textContent } from './markdownCompilerReducer';

/******************** Data Structure of Store *******************/
export const DEFAULT_STORE = {
	// todo Default store
	textContent: '#EverlinkMD'
};

/**********************************************************************************/

// Combine reducers. Also reveal the data structure of store.
const reducer = combineReducers({
	routing,
	textContent
});

export default reducer;
