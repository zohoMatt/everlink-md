/**
 * Created by Zoho on 16/9/28.
 */
import { DEFAULT_STORE} from "../../../toberefactor/app/js/model/store/developerSpecifiedData";
import { COMPILE_MARKDOWN } from '../actions/actionTypes';

import marked from '../../../toberefactor/app/js/lib/markedSetting';

/**
 * @action.type:
 * COMPILE_MARKDOWN
 */
export function compileMarkdownReducer(state = DEFAULT_STORE.textContent, action) {
	switch (action.type) {
		case COMPILE_MARKDOWN:
			return marked(action.payload);
		default:
			return state;
	}
}
