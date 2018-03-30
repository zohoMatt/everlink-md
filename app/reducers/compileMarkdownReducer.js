/**
 * Created by Zoho on 16/9/28.
 */
import { COMPILE_MARKDOWN } from 'actions/compileMdAction';

import marked from '../utils/markedConfig';
import INITIAL_STATE from '../store/initial';

/**
 * @action.type:
 * COMPILE_MARKDOWN
 */
export function compileMarkdownReducer(state = INITIAL_STATE.markdown, action) {
  const { type, payload } = action;
  switch (type) {
    case COMPILE_MARKDOWN:
      return {
        raw: payload,
        compiled: marked(payload)
      };
    default:
      return state;
  }
}

export default {};
