/**
 * Created by Zoho on 16/9/28.
 */
import React from 'react';

import MarkdownEditor from './MainPage/MarkdownEditor';
import PreviewWindow from './MainPage/PreviewWindow';
import AddLinkModal from './MainPage/modals/AddLinkModal';

import styles from './MainPage.scss';


export default class MainPage extends React.Component {

  render() {
    return (
      <div className={styles.mainPage}>
        <MarkdownEditor />
        <PreviewWindow />
        <AddLinkModal />
      </div>
    );
  }
}
