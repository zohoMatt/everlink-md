// @flow
/**
 * Created by Zoho on 16/9/28.
 */

type actionTypes = {
  +type: string,
  payload?: any
};

/** ****************** CodeMirror *******************/
export const COMPILE_MARKDOWN: string = 'COMPILE_MARKDOWN';

/******************** Modal *******************/
export const TOGGLE_MODAL_VISIBILITY: string = 'TOGGLE_MODAL_VISIBILITY';

export const toggleModal = state => (dispatch: (action: actionTypes) => void) => dispatch({
  type: TOGGLE_MODAL_VISIBILITY,
  payload: state
});

export default {
  COMPILE_MARKDOWN
};
