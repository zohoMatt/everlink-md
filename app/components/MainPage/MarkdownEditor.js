/**
 * Created by Zoho on 16/9/28.
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuid from 'uuid';
import { Controlled as CodeMirror } from 'react-codemirror2';   // CodeMirror add-ons

import { compileContent } from 'actions/compileMdAction';
import { ready2Insert } from 'actions/modalActions';
import type { cursorData, cursorPos } from 'actions/editorActions';
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
    code: string,
    cursor: cursorData,
    cachedCode: string,
    setCached: string => void
    // selection: cursorData[],
    // cursor: cursorPos
  };

  static defaultProps = {
    compile: _ => null,
    setSelection: () => null,
    code: '',
    cursor: null,
    cachedCode: '',
    setCached: _ => null
  };

  instance = null;

  updateSelection(instance, data) {
    const { head, anchor } = data.ranges[0];
    this.props.setSelection({ head, anchor });
  }

  /***************************************/
  componentWillUpdate(nextProps) {
    const { cursor, cachedCode } = nextProps;
    if (cachedCode === '') return false;
    else {
      this.instance.getDoc().replaceRange(cachedCode, cursor.anchor, cursor.head);
      return true;
    }
  }

  componentDidUpdate(prevProps) {
    prevProps.setCached('');
  }

  render() {
    const { compile, code, cursor, cachedCode } = this.props;
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
          editorDidMount={editor => this.instance = editor}
          value={code}
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
    cursor: state.cursor,
    cachedCode: state.modalCachedCode
  }),
  dispatch => bindActionCreators({
    compile: compileContent,
    setSelection: setCursorSelection,
    setCached: ready2Insert
  }, dispatch)
)(MarkdownEditor);
