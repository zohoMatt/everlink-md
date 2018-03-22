/**
 * Created by MattZo on 2018/3/7
 */
// @flow
import React from 'react';

import ModalContainer from 'components/MainPage/ModalContainer';
import BasicInput from 'components/common/input/BasicInput';
import InputPrompt from 'components/common/text/InputPrompt';
import ButtonTypes from 'utils/fontMap';

import styles from './AddLinkModal.scss';

const AddLinkModal = () => {
  return (
    <ModalContainer typeName={ButtonTypes.InsertLinkButton}>
      <div className={styles.title}>Insert a link into context</div>
      <div className={styles.content}>
        <div className={styles.row}>
          <InputPrompt label={'Text display'} width={'100px'} />
          <BasicInput width={'200px'} />
        </div>
        <div className={styles.row}>
          <InputPrompt label={'Link URL'} width={'100px'} />
          <BasicInput width={'350px'} />
        </div>
      </div>
      <div className={styles.btnContainer}>

      </div>
    </ModalContainer>
  );
};

export default AddLinkModal;

