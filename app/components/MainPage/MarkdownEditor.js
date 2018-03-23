/**
 * Created by Zoho on 16/9/28.
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuid from 'uuid';
import { Controlled as CodeMirror } from 'react-codemirror2';   // CodeMirror add-ons

import { compileContent } from 'actions/compileMdAction';
import type { cursorPos } from 'actions/editorActions';
import { setCursorSelection } from 'actions/editorActions';
import styles from './MarkdownEditor.scss';
import ActionPanel from './ActionPanel';
import PanelButton from './ActionPanel/PanelButton';
import ButtonTypes from 'utils/fontMap';

// CodeMirror Markdown syntax highlighting template
require('codemirror/mode/markdown/markdown');

class MarkdownEditor extends React.Component {
  props: {
    compile: string => void,
    setSelection: cursorPos => void,
    code: string
    // selection: cursorData[],
    // cursor: cursorPos
  };

  updateSelection(instance, data) {
    const { head, anchor } = data.ranges[0];
    this.props.setSelection({ head, anchor });
  }

  /***************************************/

  render() {
    const { compile, code } = this.props;
    const { updateSelection } = this;

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
          value={code}
          // cursor={cursor}
          // selection={selection}
          onBeforeChange={(editor, data, newCode) => compile(newCode)}
          options={codeMirrorOptions}
          onSelection={updateSelection.bind(this)}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    code: state.markdown.raw,
  }),
  dispatch => bindActionCreators({
    compile: compileContent,
    setSelection: setCursorSelection
  }, dispatch)
)(MarkdownEditor);
