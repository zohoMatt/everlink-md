// @flow
import React, { Component } from 'react';
import type { Node } from 'react';

export default class App extends Component<{ children: Node }> {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
