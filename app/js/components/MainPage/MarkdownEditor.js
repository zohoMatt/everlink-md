/**
 * Created by Zoho on 16/9/28.
 */
// todo

import React from 'react';
import { connect } from 'react-redux';

import { compileMarkdownAction } from '../../model/actions/compileMarkdownAction';
// CodeMirror add-ons
const Codemirror = require('react-codemirror');
require('codemirror/mode/markdown/markdown');

@connect(() => {
	return {};
})
export default class MarkdownEditor extends React.Component {
	constructor() {
		super();
		this.state = {
			code: '# EverlinkMD'
		}
	}

    render() {
    	const codeMirrorOptions = {
			lineNumbers: false,
			mode: 'markdown',
			theme: 'solarized-dark'
		};
        return (
        	<div id="md-editor">
				<Codemirror value={this.state.code}
							onChange={this.updateCode.bind(this)}
							options={codeMirrorOptions} />
			</div>
		);
    }

    /*****************************************/
    updateCode(newCode) {
    	this.setState({
    		code: newCode
		});
		this.props.dispatch(compileMarkdownAction(newCode));
	}
}
