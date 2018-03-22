import INITIAL_STATE from '../store/initial';

export function cursorReducer(state = INITIAL_STATE.cursor, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}

export default {};
