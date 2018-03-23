import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { insertCode2Cursor } from 'actions/modalActions';
// mustdo

const toModifyCode = component => connect(
  state => ({ originalCode: state.code }),
  dispatch => bindActionCreators({
    insertCode: insertCode2Cursor
  }, dispatch)
)(component);


export default toModifyCode;
