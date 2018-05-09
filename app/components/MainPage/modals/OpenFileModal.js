/**
 * Created by MattZo on 2018/5/9
 */
// @flow
import React from 'react';

import ModalContainer from 'components/MainPage/ModalContainer';
import ButtonTypes from 'utils/fontMap';

const OpenModal = () => (
  <ModalContainer typeName={ButtonTypes.OpenFileButton}>
    <h1>Here to Open file.</h1>
  </ModalContainer>
  );

export default OpenModal;

