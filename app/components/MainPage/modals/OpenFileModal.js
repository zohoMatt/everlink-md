/**
 * Created by MattZo on 2018/5/9
 */
// @flow
import React from 'react';
import { remote } from 'electron';

import BasicButton from 'components/common/button/BasicButton';
import ButtonTypes from 'utils/fontMap';
import ModalContainer from 'components/MainPage/ModalContainer';

import styles from './common/common.scss';
const fse = require('fs-extra');
const path = require('path');

class OpenFileModal extends React.Component {

  async readFile(filepath) {
    fse.readJson(path.resolve('./app/configs/settings.json'), (err, settings) => {
      if (err) console.error(err);
      fse.readFile(filepath, settings.editor.encoding, (err, data) => {
        if (err) console.error(err);
        console.log(data);
      });
    });
  }

  openMd() {
    const options = {
      title: 'Open as .md file',
      buttonLabel: 'Open',
      filters: [
        { name: '.md files', extensions: ['md'] }
      ],
      timeout: 60000
    };
    remote.dialog.showOpenDialog(options, filename => {
      this.readFile(filename[0]);
    });
  }

  render() {
    return (
      <ModalContainer typeName={ButtonTypes.OpenFileButton}>
        <div className={styles.title}>Open file</div>
        <BasicButton width={'170px'} text={'Open Markdown file'} onClick={this.openMd.bind(this)} />
      </ModalContainer>
    );
  }
}

export default OpenFileModal;

