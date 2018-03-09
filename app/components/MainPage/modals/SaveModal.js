/**
 * Created by MattZo on 2018/3/9
 */
// @flow
import React from 'react';

import ModalContainer from 'components/MainPage/ModalContainer';
import ButtonTypes from 'utils/fontMap';

const SaveModal = () => {
  return (
    <ModalContainer typeName={ButtonTypes.ExportFileButton}>
      <h1>Here to export to file.</h1>
    </ModalContainer>
  );
};

export default SaveModal;

