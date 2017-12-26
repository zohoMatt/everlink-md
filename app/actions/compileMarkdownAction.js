/**
 * Created by Zoho on 16/9/28.
 */
import { COMPILE_MARKDOWN } from './actionTypes';

export function compileMarkdownAction(content) {
  return {
    type: COMPILE_MARKDOWN,
    payload: content
  };
}
