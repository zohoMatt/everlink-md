/**
 * Created by MattZo on 2018/3/9
 */
// @flow
import React from 'react';

import ModalContainer from 'components/MainPage/ModalContainer';
import ButtonTypes from 'utils/fontMap';

const SyncModal = () => (
  <ModalContainer typeName={ButtonTypes.SyncEvernoteButton}>
    <h1>Here to sync with EverNote.</h1>
  </ModalContainer>
  );

export default SyncModal;

