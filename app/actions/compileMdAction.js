/**
 * Created by Zoho on 16/9/28.
 */

export const COMPILE_MARKDOWN: string = 'COMPILE_MARKDOWN';

export const compileContent = content => dispatch => dispatch({
  type: COMPILE_MARKDOWN,
  payload: content
});
