/**
 * Created by MattZo on 2018/3/22
 */
import React from 'react';

import styles from './BasicButton.scss';

const BasicButton = ({ width, text, disabled }) => {
  return <button
    className={styles.normalBtn}
    style={{ width }}
    disabled={disabled}
  >{ text }</button>;
};

BasicButton.defaultProps = {
  width: '150px',
  text: 'A lonely button',
  disabled: false
};

export default BasicButton;
