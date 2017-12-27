/**
 * Created by Zoho on 16/9/29.
 */
import React from 'react';

import styles from './_panelButton.scss';

export default class ExportSaveButton extends React.Component {

  render() {
    return (
      <div className={styles.panelButton}>
        <i className="fa fa-floppy-o" aria-hidden="true" />
      </div>
    );
  }
}
