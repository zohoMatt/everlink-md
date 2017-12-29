// @flow
import React from 'react';

import styles from './PanelButton.scss';

type Props = {
  fontName: string
};

const PanelButton = ({ fontName }: Props) => (
  <div className={styles.panelButton}>
    <i className={`fa ${fontName}`} aria-hidden="true" />
  </div>
);

export default PanelButton;
