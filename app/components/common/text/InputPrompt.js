/**
 * Created by MattZo on 2018/3/19
 */
import React from 'react';

import styles from './InputPrompt.scss';


const InputPrompt = ({ label, width }) => (
  <div className={styles.label} style={{ width }}>{ label }</div>
  );

export default InputPrompt;

