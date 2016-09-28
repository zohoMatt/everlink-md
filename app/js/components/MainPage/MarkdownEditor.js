/**
 * Created by Zoho on 16/9/28.
 */
// todo

import React from 'react';

export default class MarkdownEditor extends React.Component {

    render() {
        return (
        	<div id="md-editor">
				<textarea name="md-raw" id="md-content"></textarea>
			</div>
		);
    }
}
