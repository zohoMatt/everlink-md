/**
 * Created by MattZo on 2018/3/22
 */
// @flow
import React from 'react';
import styles from './BasicButton.scss';

type Props = {
  width: string,
  text: string,
  disabled: boolean,
  onClick: Event => void
};

const BasicButton = (props: Props) => {
  const { width, text, disabled, onClick } = props;

  return <button
    className={styles.normalBtn}
    style={{ width }}
    disabled={disabled}
    onClick={onClick}
  >{ text }</button>;
};

BasicButton.defaultProps = {
  width: '150px',
  text: 'A lonely button',
  disabled: false,
  onClick: _ => null
};

export default BasicButton;
