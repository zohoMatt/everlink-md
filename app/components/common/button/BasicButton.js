/**
 * Created by MattZo on 2018/3/22
 */
// @flow
import React from 'react';

import styles from './BasicButton.scss';

type buttonState = {
  status: 'hover' | 'default' | 'pressed'
};

class BasicButton extends React.Component {
  props: {
    width: string,
    text: string,
    disabled: boolean
  };

  static defaultProps = {
    width: '150px',
    text: 'A lonely button',
    disabled: false
  };

  state: buttonState = {
    status: 'default'
  };

  switchStatus(status) {
    this.setState({
      ...this.state, status
    });
  }

  render() {
    const { width, text, disabled } = this.props;
    const switchBtn = status => () => this.switchStatus(status);    // Wrapper for method

    return <button
      className={styles.normalBtn}
      style={{ width }}
      disabled={disabled}
      onMouseOver={switchBtn('hover')}
      onMouseLeave={switchBtn('default')}
      onMouseDown={switchBtn('pressed')}
      onMouseUp={switchBtn('hover')}
    >{ text }</button>;
  }
}

export default BasicButton;
