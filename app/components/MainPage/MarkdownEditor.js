/**
 * Created by Zoho on 16/9/28.
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuid from 'uuid';
// CodeMirror add-ons
import { Controlled as CodeMirror } from 'react-codemirror2';

import { compileContent } from 'actions/compileMarkdownAction';
import { voidFunc } from 'utils/common';

import styles from './MarkdownEditor.scss';
import ActionPanel from './ActionPanel';
import PanelButton from './ActionPanel/PanelButton';
import ButtonTypes from 'utils/fontMap';

// CodeMirror Markdown syntax highlighting template
require('codemirror/mode/markdown/markdown');

class MarkdownEditor extends React.Component {

  updateCode(editor, data, newCode) {
    this.props.compileContent(newCode);
  }
  /***************************************/

  render() {
    const codeMirrorOptions = {
      lineNumbers: false,
      mode: 'markdown',
      theme: 'solarized-dark',
      lineWrapping: true
    };
    const buttonGroup = [
      <PanelButton iconName={ButtonTypes.InsertPictureButton} key={uuid.v1()} />,
      <PanelButton iconName={ButtonTypes.InsertLinkButton} key={uuid.v1()} />
    ];
    return (
      <div className={styles.mdEditor}>
        <ActionPanel
          idName="editor"
        >{ buttonGroup }</ActionPanel>

        {/* Using ref to get instance of CodeMirror. See react-codemirror on GitHub */}
        <CodeMirror
          ref={(ref) => { this.codeMirrorInstance = ref; }}
          value={ this.props.code }
          onBeforeChange={ this.updateCode.bind(this) }
          options={codeMirrorOptions}
        />
      </div>
    );
  }
}

export default connect(
  state => ({ code: state.editor.raw }),
  dispatch => bindActionCreators({ compileContent }, dispatch)
)(MarkdownEditor);
