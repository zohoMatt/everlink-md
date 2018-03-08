// @flow
/**
 * Created by Zoho on 16/9/28.
 */

export type actionType = {
  +type: string,
  payload?: any
};

export type dispatchCreator = (actionType => void) => void

/** ****************** CodeMirror *******************/
export const COMPILE_MARKDOWN: string = 'COMPILE_MARKDOWN';

/******************** Modal *******************/
export const TOGGLE_MODAL_VISIBILITY: string = 'TOGGLE_MODAL_VISIBILITY';

export const toggleModal = typeName =>
  (dispatch: (action: actionType) => void) => dispatch({
    type: TOGGLE_MODAL_VISIBILITY,
    payload: typeName
  });

export default {
  COMPILE_MARKDOWN
};
