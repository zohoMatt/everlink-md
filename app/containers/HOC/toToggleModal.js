import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal } from 'actions/modalActions';

const toToggleModal = component => connect(
  state => ({ visibleModal: state.modalType }),
  dispatch => bindActionCreators({ toggleModal }, dispatch)
)(component);


export default toToggleModal;
