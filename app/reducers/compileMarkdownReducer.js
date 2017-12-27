/**
 * Created by Zoho on 16/9/28.
 */
import marked from '../utils/markedConfig';
import INITIAL_STATE from '../store/initial';

import { COMPILE_MARKDOWN } from '../actions/actionTypes';

/**
 * @action.type:
 * COMPILE_MARKDOWN
 */
export function compileMarkdownReducer(state = INITIAL_STATE.compiledContent, action) {
  switch (action.type) {
    case COMPILE_MARKDOWN:
      return marked(action.payload);
    default:
      return state;
  }
}

export default {};
