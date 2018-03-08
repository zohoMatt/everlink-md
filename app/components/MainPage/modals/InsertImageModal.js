/**
 * Created by MattZo on 2018/3/7
 */
import React from 'react';

import ModalContainer from 'components/MainPage/ModalContainer';
import ButtonTypes from 'utils/fontMap';

const InsertImageModal = () => {
  return (
    <ModalContainer typeName={ButtonTypes.InsertPictureButton}>
      <h1>Here to insert a picture</h1>
    </ModalContainer>
  );
};

export default InsertImageModal;

