/**
 * Created by Zoho on 16/9/29.
 */
import React from 'react';

import styles from './ActionPanel.scss';

export default class EditorActionPanel extends React.Component {

  render() {
    const { idName, buttonGroup } = this.props;
    return (
      <div className={styles[`${idName}Buttons`]}>
        { buttonGroup }
      </div>
    );
  }
}
