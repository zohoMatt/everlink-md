/**
 * Created by Zoho on 16/9/30.
 */
/**
 *
 * @param editor			{Object}
 * @param line				{Number}
 */
export function jumpToLineInMiddle(editor, line) {
	var t = editor.charCoords({line: line, ch: 0}, "local").top;
	var middleHeight = editor.getScrollerElement().offsetHeight / 2;
	editor.scrollTo(null, t - middleHeight - 5);
}
