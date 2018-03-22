// @flow
import React from 'react';
import { dispatchCreator } from 'actions/actionTypes';
import withToggleModal from 'containers/HOC/withToggleModal';
import panelSvg from 'assets/svg/panelSvg';

import styles from './PanelButton.scss';

type Props = {
  iconName: string,
  toggleModal: boolean => dispatchCreator
};

const PanelButton = ({ iconName, toggleModal }: Props) => (
  <div className={styles.panelButton} onClick={() => toggleModal(iconName)}>
    { panelSvg[iconName] }
  </div>
);

export default withToggleModal(PanelButton);
