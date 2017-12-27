/**
 * Created by Zoho on 16/9/30.
 */
/**
 *
 * @param editor {Object}
 * @param line {Number}
 */
export function jumpToLineInMiddle(editor, line: number) {
  const t = editor.charCoords({ line, ch: 0 }, 'local').top;
  const middleHeight = editor.getScrollerElement().offsetHeight / 2;
  editor.scrollTo(null, t - middleHeight - 5);
}

export default {};
