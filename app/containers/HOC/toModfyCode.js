import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleModal, ready2Insert } from 'actions/modalActions';
// mustdo

const toModifyCode = component => connect(
  state => ({
    originalCode: state.code,
    cursorSelection: state.cursor,
    cachedCode: state.cachedCode
  }),
  dispatch => bindActionCreators({
    insertCode: ready2Insert,
    toggleModal
  }, dispatch)
)(component);


export default toModifyCode;
