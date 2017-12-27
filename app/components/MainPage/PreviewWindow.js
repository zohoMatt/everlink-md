/**
 * Created by Zoho on 16/9/28.
 */
import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import styles from './PreviewWindow.scss';

import ActionPanel from './ActionPanel';
import ExportSaveButton from './ActionPanel/ExportSaveButton';
import PreferenceSettingButton from './ActionPanel/PreferenceSettingButton';
import SyncEvernoteButton from './ActionPanel/SyncEvernoteButton';

class PreviewWindow extends React.Component {

  render() {
    const htmlContent = this.props.compiledContent;
    const buttonGroup = [
      <SyncEvernoteButton key={uuid.v1()} />,
      <ExportSaveButton key={uuid.v1()} />,
      <PreferenceSettingButton key={uuid.v1()} />
    ];
    return (
      <div className={styles.mdPreview}>
        <ActionPanel
          idName="preview"
          buttonGroup={buttonGroup}
        />
        {/* setting HTML from code using dangerouslySetInnerHTML()*/}
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    );
  }
}

export default connect(state => ({ compiledContent: state.compiledContent }))(PreviewWindow);
