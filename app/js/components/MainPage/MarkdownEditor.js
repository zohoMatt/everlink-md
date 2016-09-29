/**
 * Created by Zoho on 16/9/28.
 */
import React from 'react';
import { connect } from 'react-redux';

import { compileMarkdownAction } from '../../model/actions/compileMarkdownAction';

import ActionPanel from './ActionPanel';
import InsertLinkButton from './ActionPanel/InsertLinkButton';
import InsertPictureButton from './ActionPanel/InsertPictureButton';

// CodeMirror add-ons
const Codemirror = require('react-codemirror');
require('codemirror/mode/markdown/markdown');
// uuid
import uuid from 'uuid';

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

	componentDidMount() {
		// get instance to use official manual
		const codeMirrorInstance = this.codeMirrorInstance.getCodeMirror();
		codeMirrorInstance.on('scroll', (instance) => {
		});
	}

    render() {
    	const codeMirrorOptions = {
			lineNumbers: false,
			mode: 'markdown',
			theme: 'solarized-dark',
			lineWrapping: true
		};
		const buttonGroup = [
			<InsertPictureButton key={uuid.v1()}/>,
			<InsertLinkButton key={uuid.v1()}/>
		];
        return (
        	<div id="md-editor">
				<ActionPanel
					idName="editor"
					buttonGroup={buttonGroup}/>

				{/* Using ref to get instance of CodeMirror. See react-codemirror on GitHub */}
				<Codemirror ref={(ref) => { this.codeMirrorInstance = ref}}
							value={this.state.code}
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
