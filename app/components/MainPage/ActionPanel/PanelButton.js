// @flow
import React from 'react';
import { dispatchCreator } from 'actions/actionTypes';
import toggleWrapper from 'containers/wrapper/toggleModal';

import styles from './PanelButton.scss';

type Props = {
  fontName: string,
  toggleModal: boolean => dispatchCreator
};

const PanelButton = ({ fontName, toggleModal }: Props) => (
  <div className={styles.panelButton} onClick={() => toggleModal(true)}>
    <i className={`fa ${fontName}`} aria-hidden="true" />
  </div>
);

export default toggleWrapper(PanelButton);
