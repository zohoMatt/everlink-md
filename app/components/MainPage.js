/**
 * Created by Zoho on 16/9/28.
 */
import React from 'react';

import MarkdownEditor from './MainPage/MarkdownEditor';
import PreviewWindow from './MainPage/PreviewWindow';
import AddLinkModal from './MainPage/modals/AddLinkModal';
import InsertImageModal from './MainPage/modals/InsertImageModal';
import SyncModal from './MainPage/modals/SyncModal';
import SaveModal from './MainPage/modals/SaveModal';
import SettingModal from './MainPage/modals/SettingModal';

import styles from './MainPage.scss';


export default class MainPage extends React.Component {

  render() {
    return (
      <div className={styles.mainPage}>
        <MarkdownEditor />
        <PreviewWindow />
        <AddLinkModal />
        <InsertImageModal />
        <SyncModal />
        <SaveModal />
        <SettingModal />
      </div>
    );
  }
}
