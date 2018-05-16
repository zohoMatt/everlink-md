/**
 * Created by MattZo on 2018/3/7
 */
import React from 'react';

import InputPrompt from 'components/common/text/InputPrompt';
import BasicInput from 'components/common/input/BasicInput';
import BasicButton from 'components/common/button/BasicButton';
import ModalContainer from 'components/MainPage/ModalContainer';
import toModifyCode from 'containers/HOC/toModfyCode';

import ButtonTypes from 'utils/fontMap';
import styles from './InsertImageModal.scss';
import commonStyles from './common/common.scss';

type Props = {
  insertCode: string => void,
  toggleModal: string | boolean => void
};

type State = {
  cachedText?: string,
  cachedUrl?: string,
  cachedCode?: string
};

class InsertImageModal extends React.Component<Props, State> {
  static defaultProps = {
    insertCode: () => null,
    toggleModal: () => null
  };

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
    const cachedCode = `![${cachedText}](${cachedUrl})`;
    // Update state
    this.setState({
      ...newState,
      cachedCode
    });
  }

  insertHandler(event) {
    const { toggleModal, insertCode } = this.props;
    toggleModal(false);
    insertCode(this.state.cachedCode);
  }

  /******************** React APIs *******************/
  render() {
    const { cachedUrl } = this.state;

    const labelWidth = '110px';
    return (
      <ModalContainer typeName={ButtonTypes.InsertPictureButton} posStyles={{ height: '550px' }}>
        <div className={commonStyles.title}>Insert an image into context</div>
        <div className={styles.content}>
          <div className={styles.row}>
            <InputPrompt label={'Image Title'} width={labelWidth} />
            <BasicInput width={'200px'} onChange={event => this.updateCache(event, 'cachedText')} />
          </div>
          <div className={styles.row}>
            <InputPrompt label={'Image URL'} width={labelWidth} />
            <BasicInput width={'350px'} onChange={event => this.updateCache(event, 'cachedUrl')} />
          </div>
          <div className={styles.imageContainer}>
            <img width={'100%'} height={'100%'} src={cachedUrl} />
          </div>
        </div>
        <div className={commonStyles.btnContainer}>
          <BasicButton text={'Insert'} width={'120px'} onClick={this.insertHandler.bind(this)} />
        </div>
      </ModalContainer>
    );
  }
}

export default toModifyCode(InsertImageModal);

