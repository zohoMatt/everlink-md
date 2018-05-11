/**
 * Created by Zoho on 16/9/28.
 */
// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuid from 'uuid';
import { Controlled as CodeMirror } from 'react-codemirror2';   // CodeMirror add-ons

import { compileContent } from 'actions/compileMdAction';
import { ready2Insert } from 'actions/modalActions';
import type { cursorData, cursorPos } from 'actions/editorActions';
import { setCursorSelection } from 'actions/editorActions';
import { adjustPreviewScrollPercent } from 'actions/previewActions';
import ButtonTypes from 'utils/fontMap';

import styles from './MarkdownEditor.scss';
import ActionPanel from './ActionPanel';
import PanelButton from './ActionPanel/PanelButton';

// CodeMirror Markdown syntax highlighting template
require('codemirror/mode/markdown/markdown');

type Props = {
  compile: string => void,
  setSelection: cursorData => void,
  code: string,
  cursor: cursorData,
  cachedCode: string,
  setCached: string => void,
  changeScrollPos: number => void
  // selection: cursorData[],
  // cursor: cursorPos
};

type State = {
};

class MarkdownEditor extends React.Component<Props, State> {
  static defaultProps = {
    compile: () => null,
    setSelection: () => null,
    code: '',
    cursor: null,
    cachedCode: '',
    setCached: () => null,
    changeScrollPos: () => null
  };

  componentWillUpdate(nextProps) {
    const { cursor, cachedCode } = nextProps;
    if (cachedCode === '') return false;

    this.instance.getDoc().replaceRange(cachedCode, cursor.anchor, cursor.head);
    return true;
  }

  componentDidUpdate(prevProps) {
    prevProps.setCached('');
  }
  /***************************************/
  instance = null;

  updateSelection(instance, data) {
    const { head, anchor } = data.ranges[0];
    this.props.setSelection({ head, anchor });
  }

  scrollHandler(editor, data) {
    const { top, height } = data;
    this.props.changeScrollPos(top / height);
  }

  render() {
    const { compile, code } = this.props;
    const { updateSelection, scrollHandler } = this;

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
          editorDidMount={editor => { this.instance = editor; }}
          value={code}
          // selection={selection}
          onBeforeChange={(editor, data, newCode) => compile(newCode)}
          options={codeMirrorOptions}
          onSelection={updateSelection.bind(this)}
          onScroll={scrollHandler.bind(this)}
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
    setCached: ready2Insert,
    changeScrollPos: adjustPreviewScrollPercent
  }, dispatch)
)(MarkdownEditor);
