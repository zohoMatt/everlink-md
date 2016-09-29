/**
 * Created by Zoho on 16/9/28.
 */
import React from 'react';

import MarkdownEditor from './MainPage/MarkdownEditor';
import PreviewWindow from './MainPage/PreviewWindow';


export default class MainPage extends React.Component {

    render() {
    	return (
			<div id="main-page">
				<MarkdownEditor/>
				<PreviewWindow/>
			</div>
		);
    }
}
