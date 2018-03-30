/**
 * Created by MattZo on 2018/3/9
 */
// @flow
import React from 'react';

import ModalContainer from 'components/MainPage/ModalContainer';
import ButtonTypes from 'utils/fontMap';

const SettingModal = () => (
  <ModalContainer typeName={ButtonTypes.PreferenceSettingButton}>
    <h1>Here to set your preferences.</h1>
  </ModalContainer>
  );

export default SettingModal;

