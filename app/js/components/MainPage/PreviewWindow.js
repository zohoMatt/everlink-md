/**
 * Created by Zoho on 16/9/28.
 */
import React from 'react';
import { connect } from 'react-redux';

import marked from '../../lib/markedSetting';
import uuid from 'uuid';

import ActionPanel from './ActionPanel';
import ExportSaveButton from './ActionPanel/ExportSaveButton';
import PreferenceSettingButton from './ActionPanel/PreferenceSettingButton';
import SyncEvernoteButton from './ActionPanel/SyncEvernoteButton';

@connect((store) => {
	return {
		textContent: store.textContent
	}
})
export default class PreviewWindow extends React.Component {

    render() {
    	const htmlContent = marked(this.props.textContent || '# EverlinkMD');
		const buttonGroup = [
			<SyncEvernoteButton key={uuid.v1()}/>,
			<ExportSaveButton key={uuid.v1()}/>,
			<PreferenceSettingButton key={uuid.v1()}/>
		];
        return (
        	<div id="md-preview">
				<ActionPanel
					idName="preview"
					buttonGroup={buttonGroup}/>
				<div dangerouslySetInnerHTML={{__html: htmlContent}} />
			</div>
		)
    }
}
