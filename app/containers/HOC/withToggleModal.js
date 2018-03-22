import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal } from 'actions/actionTypes';

const withToggleModal = component => connect(
  state => ({}),
  dispatch => bindActionCreators({ toggleModal }, dispatch)
)(component);


export default withToggleModal;
