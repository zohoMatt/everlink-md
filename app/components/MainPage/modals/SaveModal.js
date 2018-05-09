/**
 * Created by MattZo on 2018/3/9
 */
// @flow
import React from 'react';
import pdf from 'html-pdf';
import { dialog, ipcRenderer, remote } from 'electron';
import { connect } from 'react-redux';

import ModalContainer from 'components/MainPage/ModalContainer';
import ButtonTypes from 'utils/fontMap';
import BasicButton from 'components/common/button/BasicButton';

import styles from './common/common.scss';

const fse = require('fs-extra');

class SaveModal extends React.Component {

  componentWillMount() {
  }

  /******************** Helpers *******************/
  writeMdFile(path) {
    fse.outputFile(path, this.props.html);
  }

  /******************** Handlers *******************/
  openSaveMd() {
    const options = {
      title: 'Save as .md file',
      buttonLabel: 'Save',
      filters: [
        { name: '.md files', extensions: ['md'] }
      ]
    };
    remote.dialog.showSaveDialog(options, filename => {
      console.log(filename);
      this.writeMdFile(filename);
    });
  }

  exportToPdf() {
    const { html } = this.props;
    const options = {
      script: '/node_modules/html-pdf/lib/scripts/pdf_a4_portrait.js',
      format: 'letter'
    };
    pdf.create(html, options).toFile('./app/exported/output.pdf', (err, res) => {
      if (err) console.log(err);
      else console.log(res);
    });
  }

  render() {
    return (
      <ModalContainer typeName={ButtonTypes.ExportFileButton}>
        <div className={styles.title}>Save & Export</div>
        <BasicButton width={'130px'} text={'Save as .md'} onClick={this.openSaveMd.bind(this)} />
        <BasicButton width={'130px'} text={'Export to PDF'} onClick={this.exportToPdf.bind(this)}/>
      </ModalContainer>
    );
  }
}

export default connect(state => ({
  html: state.markdown.compiled
}))(SaveModal);

