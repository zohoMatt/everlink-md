/**
 * Created by Zoho on 16/9/28.
 */
// todo

import React from 'react';
import { connect } from 'react-redux';

import { compileMarkdownAction } from '../../model/actions/compileMarkdownAction';

@connect(() => {
	return {};
})
export default class MarkdownEditor extends React.Component {

    render() {
        return (
        	<div id="md-editor">
				<textarea name="md-raw" id="md-content"
						  onChange={this.dispatchManager.bind(this)}>
				</textarea>
			</div>
		);
    }

    /*****************************************/
    dispatchManager(event) {
    	const markdown = event.target.value;
		this.props.dispatch(compileMarkdownAction(markdown));
	}
}
