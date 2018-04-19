// @flow
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Table.module.css';
import Player from './Player';
import Community from './Community';

import type PlProps from './Player';
import type CmProps from './Community';

type Props = {
  players: PlProps[],
  community: CmProps,
};

// eslint-disable-next-line no-use-before-define
Table.defaultProps = {};

function Table(props: Props) {
  const wrap = (Component, style, prps) => (
    <div styleName={style}>
      <Component {...prps} />
    </div>
  );

  const [sb, bb, bu] = props.players;

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

