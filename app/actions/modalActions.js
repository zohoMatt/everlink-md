/******************** Toggle visibility *******************/
export const TOGGLE_MODAL_VISIBILITY = 'TOGGLE_MODAL_VISIBILITY';

export const toggleModal = typeName => dispatch => dispatch({
  type: TOGGLE_MODAL_VISIBILITY,
  payload: typeName
});

/******************** Modify code and re-render *******************/
export const MODIFY_CODE: string = 'MODIFY_CODE';

export const modifyCode = newCode => dispatch => dispatch({
  type: MODIFY_CODE,
  payload: newCode
});
