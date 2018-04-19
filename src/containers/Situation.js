// @flow
import React, { Component } from 'react';

import Table from '../components/Table';
import { init3h } from '../static/GameState';

import type GameState from '../components/Table';

type Props = {};

// eslint-disable-next-line
export default class Situation extends Component< Props, GameState > {
  static defaultProps = {};

  constructor() {
    super();
    this.state = init3h;
  }

  render() {
    return (
      <div>
        <Table {...this.state} />
      </div>
    );
  }
}
