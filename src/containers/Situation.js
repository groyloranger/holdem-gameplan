// @flow
import React, { Component } from 'react';

import Table from '../components/Table';
import { fold, call } from '../logic/Situation.logic';
import { init3h } from '../static/GameState';

import type GameState from '../components/Table';

type Props = {};

// eslint-disable-next-line
export default class Situation extends Component< Props, GameState > {
  static defaultProps = {};

  constructor() {
    super();
    this.state = init3h;
    // $FlowFixMe
    this.fold = this.fold.bind(this);
    // $FlowFixMe
    this.call = this.call.bind(this);
  }

  fold() {
    const pl = fold(this.state.players);
    this.setState(() => ({
      players: pl,
    }));
  }

  call() {
    const pl = call(this.state.players);
    this.setState(() => ({
      players: pl,
    }));
  }

  render() {
    const action = {
      fold: this.fold,
      call: this.call,
      raise: () => {
        console.log('rrrrr');
      },
      handleAmount: () => {
        console.log('amtamtamt');
      },
    };

    return (
      <div>
        <Table {...this.state} action={action} />
      </div>
    );
  }
}
