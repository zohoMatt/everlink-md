/**
 * Created by MattZo on 2018/3/22
 */
// @flow
import { dispatchType } from 'actions/actionTypes';

export type cursorPos = {
  ch: number,
  line: number
};

export type cursorData = {
  anchor: cursorPos,
  head: cursorPos
};

export const MOVE_CURSOR = 'MOVE_CURSOR';

export const setCursorSelection = (cursorState: cursorData) =>
  (dispatch: dispatchType) =>
    dispatch({
      type: MOVE_CURSOR,
      payload: cursorState
    });
