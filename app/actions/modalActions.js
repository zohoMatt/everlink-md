/******************** Toggle visibility *******************/
export const TOGGLE_MODAL_VISIBILITY = 'TOGGLE_MODAL_VISIBILITY';

export const toggleModal = typeName => dispatch => dispatch({
  type: TOGGLE_MODAL_VISIBILITY,
  payload: typeName
});

/******************** Modify code and re-render *******************/
export const INSERT_CODE_HERE: string = 'INSERT_CODE_HERE';

export const ready2Insert = newCode => dispatch => dispatch({
  type: INSERT_CODE_HERE,
  payload: newCode
});
