/**
 * Created by MattZo on 2018/3/9
 */
 // @flow
import React from 'react';

import styles from './BasicInput.scss';

type Props = {
  value?: string,
  placeholder?: string,
  onChange?: * => void
};

class BasicInput extends React.Component {
  static defaultProps = {
    value: '',
    placeholder: 'Please type in',
    onChange: _ => null
  };

  state = {
    selfValue: ''
  };

  props: {
    value: string,
    placeholder: string,
    onChange: * => void
  };

  /******************** Methods *******************/
  updateChange(event, extraCallbacks = _ => null) {
    event.preventDefault();
    this.setState({ ...this.state, selfValue: event.target.value });
    extraCallbacks(event);
  }


  render() {
    const { placeholder, onChange } = this.props;
    const { selfValue } = this.state;
    return (
      <div className={styles.wrapperInput}>
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          value={selfValue}
          onChange={this.updateChange.bind(this)}
        />
      </div>
    );
  }
}


export default BasicInput;
