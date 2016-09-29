/**
 * Created by Zoho on 16/9/29.
 */
import React from 'react';

export default class EditorActionPanel extends React.Component {

    render() {
    	// todo Tooltip
		const { idName, buttonGroup} = this.props;
        return (
        	<div id={`${idName}-buttons`}>
				{ buttonGroup }
			</div>
		);
    }
}
