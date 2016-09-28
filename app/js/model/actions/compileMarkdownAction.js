/**
 * Created by Zoho on 16/9/28.
 */
export function compileMarkdownAction(content) {
	return {
		type: 'COMPILE_MARKDOWN',
		payload: content
	}
}
