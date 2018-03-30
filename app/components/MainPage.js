/**
 * Created by Zoho on 16/9/28.
 */
import React from 'react';

import ButtonTypes from 'utils/fontMap';

import toToggleModal from 'containers/HOC/toToggleModal';
import MarkdownEditor from './MainPage/MarkdownEditor';
import PreviewWindow from './MainPage/PreviewWindow';
import AddLinkModal from './MainPage/modals/AddLinkModal';
import InsertImageModal from './MainPage/modals/InsertImageModal';
import SyncModal from './MainPage/modals/SyncModal';
import SaveModal from './MainPage/modals/SaveModal';
import SettingModal from './MainPage/modals/SettingModal';

import styles from './MainPage.scss';


const modals = [
  { type: ButtonTypes.InsertLinkButton, component: <AddLinkModal /> },
  { type: ButtonTypes.InsertPictureButton, component: <InsertImageModal /> },
  { type: ButtonTypes.SyncEvernoteButton, component: <SyncModal /> },
  { type: ButtonTypes.ExportFileButton, component: <SaveModal /> },
  { type: ButtonTypes.PreferenceSettingButton, component: <SettingModal /> }
];

type Props = {
  visibleModal: string
};

class MainPage extends React.Component<Props> {

  static defaultProps = {
    visibleModal: ''
  };

  render() {
    const toDisplayObj = modals.filter(modal => modal.type === this.props.visibleModal);
    const toDisplayComp = toDisplayObj.length === 1 ? toDisplayObj[0].component : null;

    return (
      <div className={styles.mainPage}>
        <MarkdownEditor />
        <PreviewWindow />
        { toDisplayComp }
      </div>
    );
  }
}

export default toToggleModal(MainPage);
