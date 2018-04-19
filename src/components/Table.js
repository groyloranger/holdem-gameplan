// @flow
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Table.module.css';
import Action from './Action';
import Player from './Player';
import Community from './Community';

import type AcProps from './Action';
import type PlProps from './Player';
import type CmProps from './Community';

type PlayerList = {
  seat0?: PlProps,
  seat1?: PlProps,
  seat2?: PlProps,
  seat3?: PlProps,
  seat4?: PlProps,
  seat5?: PlProps,
  seat6?: PlProps,
  seat7?: PlProps,
  seat8?: PlProps,
  seat9?: PlProps,
}

export type GameState = {
  players: PlayerList,
  community: CmProps,
  action?: AcProps,
};

// eslint-disable-next-line no-use-before-define
Table.defaultProps = {
  action: {
    fold: () => {
      console.log('fold');
    },
    call: () => {
      console.log('call');
    },
    raise: () => {
      console.log('raise');
    },
    handleAmount: () => {
      console.log('amount changed');
    },
  },
};

function Table(props: GameState) {
  const wrap = (Component, style, prps) => (
    <div styleName={style}>
      <Component {...prps} />
    </div>
  );

  const { seat0: sb, seat1: bb, seat2: bu } = props.players;

  return (
    <div styleName="wrapper">
      {wrap(Community, 'community', props.community)}
      {wrap(Player, 'pl0', sb)}
      {wrap(Player, 'pl1', bb)}
      {wrap(Player, 'pl2', bu)}
      {wrap(Action, 'action', props.action)}
    </div>
  );
}

export default CSSModules(Table, styles);

