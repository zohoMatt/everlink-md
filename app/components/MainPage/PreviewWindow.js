/**
 * Created by Zoho on 16/9/28.
 */
// @flow
import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import styles from './PreviewWindow.scss';

import ActionPanel from './ActionPanel';
import PanelButton from './ActionPanel/PanelButton';
import ButtonTypes from 'utils/fontMap';

type Props = {
  compiledContent: string
};
const PreviewWindow = ({ compiledContent }: Props) => {
  const buttonGroup = [
    <PanelButton iconName={ButtonTypes.SyncEvernoteButton} key={uuid.v1()} />,
    <PanelButton iconName={ButtonTypes.ExportFileButton} key={uuid.v1()} />,
    <PanelButton iconName={ButtonTypes.PreferenceSettingButton} key={uuid.v1()} />
  ];
  return (
    <div className={styles.mdPreview}>
      <ActionPanel
        idName="preview"
      >{ buttonGroup }</ActionPanel>
      {/* setting HTML from code using dangerouslySetInnerHTML()*/}
      <div dangerouslySetInnerHTML={{ __html: compiledContent }} />
    </div>
  );
};

export default connect(state => ({ compiledContent: state.markdown.compiled }))(PreviewWindow);
