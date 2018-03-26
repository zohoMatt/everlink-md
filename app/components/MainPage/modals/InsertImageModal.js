/**
 * Created by MattZo on 2018/3/7
 */
import React from 'react';

import InputPrompt from 'components/common/text/InputPrompt';
import BasicInput from 'components/common/input/BasicInput';
import BasicButton from 'components/common/button/BasicButton';
import ModalContainer from 'components/MainPage/ModalContainer';

import ButtonTypes from 'utils/fontMap';
import styles from './InsertImageModal.scss';
import commonStyles from './common/common.scss';

class InsertImageModal extends React.Component {
  state = {
    cachedText: '',
    cachedUrl: '',
    cachedCode: ''
  };

  /******************** Helpers *******************/
  updateCache(event, prop) {
    const newState = {
      ...this.state,
      [prop]: event.target.value
    };
    const { cachedText, cachedUrl } = newState;
    const cachedCode = `[${cachedText}](${cachedUrl})`;
    // Update state
    this.setState({
      ...newState,
      cachedCode
    });
  }

  /******************** React APIs *******************/
  render() {
    return (
      <ModalContainer typeName={ButtonTypes.InsertPictureButton}>
        <div className={commonStyles.title}>Insert an image into context</div>
        <div className={styles.content}>
          <div className={styles.row}>
            <InputPrompt label={'Description'} />
            <BasicInput width={'200px'} onChange={event => this.updateCache(event, 'cachedText')} />
          </div>
          <div className={styles.row}>
            <InputPrompt label={'Image URL'} />
            <BasicInput width={'350px'} onChange={event => this.updateCache(event, 'cachedUrl')} />
          </div>
        </div>
        <div className={commonStyles.btnContainer}>
          <BasicButton text={'Insert'} width={'120px'} onClick={this.insertHandler.bind(this)} />
        </div>
      </ModalContainer>
    );
  }
}

export default InsertImageModal;

