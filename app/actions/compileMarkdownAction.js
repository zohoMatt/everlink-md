/**
 * Created by Zoho on 16/9/28.
 */
import { COMPILE_MARKDOWN, UPDATE_RAW_CONTENT } from './actionTypes';


/******************** Raw actions *******************/
export function compileMarkdownAction(content) {
  return {
    type: COMPILE_MARKDOWN,
    payload: content
  };
}

/******************** Wrapper *******************/
export const compileContent = content => dispatch => dispatch(compileMarkdownAction(content));

export default {
  compileMarkdownAction
};
