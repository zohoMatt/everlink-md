/**
 * Created by Zoho on 16/9/28.
 */
// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuid from 'uuid';

import { adjustPreviewScrollPercent } from 'actions/previewActions';
import ButtonTypes from 'utils/fontMap';

import previewStyles from '../../externals/previewConfigs/previewStyleLoader';
import ActionPanel from './ActionPanel';
import PanelButton from './ActionPanel/PanelButton';

type Props = {
  compiledContent: string,
  scrollTopPercent: number,
  changeScrollPos: number => void
};

type State = {
};

const appliedStyle = previewStyles.Default;

class PreviewWindow extends React.Component<Props, State> {
  static defaultProps = {
    compiledContent: '',
    scrollTopPercent: 0,
    changeScrollPos: () => null
  };

  shouldComponentUpdate(nextProps) {
    const { scrollTopPercent } = nextProps;
    console.log(scrollTopPercent);
    return true;
  }


  render() {
    const { compiledContent, scrollTopPercent, changeScrollPos } = this.props;
    const buttonGroup = [
      <PanelButton iconName={ButtonTypes.OpenFileButton} key={uuid.v1()} />,
      <PanelButton iconName={ButtonTypes.SyncEvernoteButton} key={uuid.v1()} />,
      <PanelButton iconName={ButtonTypes.ExportFileButton} key={uuid.v1()} />,
      <PanelButton iconName={ButtonTypes.PreferenceSettingButton} key={uuid.v1()} />
    ];

    const scrollHandler = (event) => {
      event.preventDefault();
      const { scrollTop, clientHeight, scrollHeight} = event.target;
    };

    return (
      <div className={appliedStyle.mdPreview} onScroll={scrollHandler}>
        <ActionPanel
          idName="preview"
        >{ buttonGroup }</ActionPanel>
        {/* setting HTML from code using dangerouslySetInnerHTML()*/}
        <div dangerouslySetInnerHTML={{ __html: compiledContent }} />
      </div>
    );
  }
}

export default connect(
  state => ({
    compiledContent: state.markdown.compiled,
    scrollTopPercent: state.scrollPercent
  }),
  dispatch => bindActionCreators({ changeScrollPos: adjustPreviewScrollPercent }, dispatch)
)(PreviewWindow);
