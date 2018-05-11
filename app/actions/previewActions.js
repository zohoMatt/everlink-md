/**
 * Created by MattZo on 2018/5/11
 */
// @flow
import type { dispatchType } from 'actions/actionTypes';

export const ADJUST_SCROLLTOP = 'ADJUST_SCROLLTOP';

export const adjustPreviewScrollPercent = (scrollTopRadio: number) =>
  (dispatch: dispatchType) =>
    dispatch({ type: ADJUST_SCROLLTOP, payload: scrollTopRadio });
