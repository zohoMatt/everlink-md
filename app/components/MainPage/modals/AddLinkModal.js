/**
 * Created by MattZo on 2018/3/7
 */
// @flow
import React from 'react';

import ModalContainer from 'components/MainPage/ModalContainer';
import BasicInput from 'components/common/input/BasicInput';
import ButtonTypes from 'utils/fontMap';

import styles from './AddLinkModal.scss';

const AddLinkModal = () => {
  return (
    <ModalContainer typeName={ButtonTypes.InsertLinkButton}>
      <div className={styles.title}>Insert a link into context</div>
      <BasicInput />
    </ModalContainer>
  );
};

export default AddLinkModal;

