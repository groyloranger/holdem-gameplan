// @flow
import React, { Component } from 'react';

import Situation from './Situation';

type Props = {};
type State = {};

// eslint-disable-next-line
export default class App extends Component< Props, State > {
  static defaultProps = {};

  render() {
    return (
      <div>
        <Situation />
      </div>
    );
  }
}
