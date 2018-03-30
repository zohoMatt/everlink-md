/**
 * Created by MattZo on 2018/3/19
 */
// @flow
import React from 'react';

import styles from './InputPrompt.scss';

type Props = {
  label: string,
  width: string
};

const InputPrompt = ({ label, width }: Props) => (
  <div className={styles.label} style={{ width }}>{ label }</div>
  );

export default InputPrompt;

