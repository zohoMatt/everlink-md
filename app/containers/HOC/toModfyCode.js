import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// mustdo

const toModifyCode = component => connect(
  state => ({ originalCode: state.code }),
  dispatch => bindActionCreators({ }, dispatch)
)(component);


export default toModifyCode;
