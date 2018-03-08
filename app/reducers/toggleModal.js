/**
 * Created by MattZo on 2018/3/7
 */
import INITIAL_STATE from '../store/initial';
import { TOGGLE_MODAL_VISIBILITY } from 'actions/actionTypes';

export const toggleModal = (state = INITIAL_STATE.modalVisible, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_VISIBILITY:
      return action.payload
    default:
      return state;
  }
};

export default {};
