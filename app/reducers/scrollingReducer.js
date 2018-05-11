/**
 * Created by MattZo on 2018/5/11
 */
import { ADJUST_SCROLLTOP } from 'actions/previewActions';
import INITIAL_STATE from '../store/initial';

export function scrollReducer(state = INITIAL_STATE.scrollPercent, action) {
  const { type, payload } = action;
  switch (type) {
    case ADJUST_SCROLLTOP:
      return payload;
    default:
      return state;
  }
}

export default {};
