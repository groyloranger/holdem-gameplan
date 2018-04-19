// @flow
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Table.module.css';
import Player from './Player';
import Community from './Community';

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
};

// eslint-disable-next-line no-use-before-define
Table.defaultProps = {};

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
    </div>
  );
}

export default CSSModules(Table, styles);

