/**
 * Created by MattZo on 2018/3/9
 */
 // @flow
import React from 'react';

import styles from './BasicInput.scss';

class BasicInput extends React.Component {
  props: {
    placeholder: string,
    onChange: any => void,
    width: string
  };

  static defaultProps = {
    placeholder: 'Please type in',
    onChange: _ => null,
    width: '200px'
  };

  state = {
    selfValue: ''
  };

  /******************** Methods *******************/
  updateChange(event, extraCallbacks = _ => null) {
    event.preventDefault();
    this.setState({ ...this.state, selfValue: event.target.value });
    extraCallbacks(event);
  }

  clearInput() {
    this.setState({ ...this.state, selfValue: '' });
  }

  render() {
    const { placeholder, width } = this.props;
    const { selfValue } = this.state;
    const clearTextIcon = selfValue.length > 0
      ? (<i className={styles.clearInput} onClick={this.clearInput.bind(this)} />)
      : null;

    return (
      <div className={styles.wrapperInput} style={{ width }}>
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          value={selfValue}
          onChange={this.updateChange.bind(this)}
          style={{ width }}
        />
        { clearTextIcon }
      </div>
    );
  }
}


export default BasicInput;
