/**
 * Created by Zoho on 16/9/29.
 */
// @flow
import React from 'react';

import type { Children } from 'react';
import styles from './ActionPanel.scss';

type Props = {
  idName: string,
  children: Children
};

const EditorActionPanel = ({ idName, children }: Props) => (
  <div className={styles[`${idName}Buttons`]}>
    { children }
  </div>
);

export default EditorActionPanel;
