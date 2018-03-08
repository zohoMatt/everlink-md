/**
 * Created by Zoho on 16/9/28.
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuid from 'uuid';
// CodeMirror add-ons
import Codemirror from 'react-codemirror';

import { compileContent } from 'actions/compileMarkdownAction';
import { voidFunc } from 'utils/common';

import styles from './MarkdownEditor.scss';
import ActionPanel from './ActionPanel';
import PanelButton from './ActionPanel/PanelButton';
import ButtonTypes from 'utils/fontMap';

// CodeMirror Markdown syntax highlighting template
require('codemirror/mode/markdown/markdown');

class MarkdownEditor extends React.Component {
  componentDidMount() {
    // get instance to use official manual
    const codeMirrorInstance = this.codeMirrorInstance.getCodeMirror();
    codeMirrorInstance.on('scroll', (instance) => {
    });
  }

  /*****************************************/
  updateCode(newCode) {
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
      <PanelButton fontName={ButtonTypes.InsertPictureButton} key={uuid.v1()} />,
      <PanelButton fontName={ButtonTypes.InsertLinkButton} key={uuid.v1()} />
    ];
    return (
      <div className={styles.mdEditor}>
        <ActionPanel
          idName="editor"
        >{ buttonGroup }</ActionPanel>

        {/* Using ref to get instance of CodeMirror. See react-codemirror on GitHub */}
        <Codemirror
          ref={(ref) => { this.codeMirrorInstance = ref; }}
          value={this.props.code}
          onChange={this.updateCode.bind(this)}
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
