import { INSERT_CODE_HERE } from 'actions/modalActions';
import INITIAL_STATE from '../store/initial';

export function insertCodeReducer(state = INITIAL_STATE.modalType, action) {
  const { type, payload } = action;
  switch (type) {
    case INSERT_CODE_HERE:
      return payload;
    default:
      return state;
  }
}

export default {};
