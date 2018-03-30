// @flow
import React from 'react';
import type { dispatchCreator } from 'actions/actionTypes';
import toToggleModal from 'containers/HOC/toToggleModal';
import panelSvg from 'assets/svg/panelSvg';

import styles from './PanelButton.scss';

type Props = {
  iconName: string,
  toggleModal: (string | boolean) => dispatchCreator
};

const PanelButton = ({ iconName, toggleModal }: Props) => (
  <div className={styles.panelButton} onClick={() => toggleModal(iconName)}>
    { panelSvg[iconName] }
  </div>
);

export default toToggleModal(PanelButton);
