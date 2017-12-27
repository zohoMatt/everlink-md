import React from 'react';

import styles from './PanelButton.scss';

const PanelButton = ({ fontName }) => {
  return (
    <div className={styles.panelButton}>
      <i className={`fa ${fontName}`} aria-hidden="true" />
    </div>
  );
};

export default PanelButton;
