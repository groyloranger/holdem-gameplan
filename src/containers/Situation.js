// @flow
import React, { Component } from 'react';

import Table from '../components/Table';

import type GameState from '../components/Table';

type Props = {};

// eslint-disable-next-line
export default class Situation extends Component< Props, GameState > {
  static defaultProps = {};

  constructor() {
    super();
    this.state = {
      community: {
        board: [],
        pot: 1.5,
      },
      players: {
        seat0: {
          active: true,
          bet: 0,
          folded: false,
          name: 'Button',
          stack: 100,
        },
        seat1: {
          active: false,
          bet: 0,
          folded: false,
          name: 'Small',
          stack: 99.5,
        },
        seat2: {
          active: false,
          bet: 1,
          folded: false,
          name: 'Big',
          stack: 99,
        },
      },
    };
  }


  render() {
    return (
      <div>
        <Table {...this.state} />
      </div>
    );
  }
}
