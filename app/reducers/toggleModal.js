/**
 * Created by MattZo on 2018/3/7
 */
import { TOGGLE_MODAL_VISIBILITY } from 'actions/modalActions';
import INITIAL_STATE from '../store/initial';

export const toggleModal = (state = INITIAL_STATE.modalType, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_VISIBILITY:
      return action.payload;
    default:
      return state;
  }
};

export default {};
