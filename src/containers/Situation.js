// @flow
import React, { Component } from 'react';

import Table from '../components/Table';

import type PlProps from '../components/Player';
import type CmProps from '../components/Community';

type Props = {};
type State = {
  community: CmProps,
  players: PlProps[],
};

// eslint-disable-next-line
export default class Situation extends Component< Props, State > {
  static defaultProps = {};

  constructor() {
    super();
    this.state = {
      community: {
        board: [],
        pot: 1.5,
      },
      players: [
        {
          active: true,
          bet: 0,
          folded: false,
          name: 'Button',
          stack: 100,
        },
        {
          active: false,
          bet: 0,
          folded: false,
          name: 'Small',
          stack: 99.5,
        },
        {
          active: false,
          bet: 1,
          folded: false,
          name: 'Big',
          stack: 99,
        },
      ],
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
