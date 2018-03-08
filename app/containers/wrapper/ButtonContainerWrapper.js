import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal } from 'actions/actionTypes';

const containerWrapper = component => connect(
  state => null,
  dispatch => bindActionCreators({ toggleModal }, dispatch)
)(component);


export default containerWrapper;
