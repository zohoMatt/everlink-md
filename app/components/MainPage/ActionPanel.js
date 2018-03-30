/**
 * Created by Zoho on 16/9/29.
 */
// @flow
import * as React from 'react';

import styles from './ActionPanel.scss';

type Props = {
  idName: string,
  children: React.Node
};

const EditorActionPanel = ({ idName, children }: Props) => (
  <div className={styles[`${idName}Buttons`]}>
    { children }
  </div>
);

export default EditorActionPanel;
