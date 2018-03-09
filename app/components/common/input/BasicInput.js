/**
 * Created by MattZo on 2018/3/9
 */
 // @flow
import React from 'react';

import styles from './BasicInput.scss';

class BasicInput extends React.Component {
  props: {
    placeholder: string,
    onChange: any => void
  };

  static defaultProps = {
    placeholder: 'Please type in',
    onChange: _ => null
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


  render() {
    const { placeholder } = this.props;
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
        <i className={styles.clearInput} />
      </div>
    );
  }
}


export default BasicInput;
