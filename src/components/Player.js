// @flow
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Player.module.css';

export type PlProps = {
  active?: boolean,
  bet?: number,
  folded?: boolean,
  name?: string,
  stack?: number,
};

// eslint-disable-next-line no-use-before-define
Player.defaultProps = {
  active: false,
  bet: 0,
  folded: false,
  name: 'Player',
  stack: 100,
};

function Player(props: PlProps) {
  const state = () => {
    let s = 'inactive';
    if (props.active) { s = 'active'; }
    if (props.folded) { s = 'folded'; }
    return s;
  };

  return (
    <div styleName={state()}>
      <center styleName="name" >{props.name}</center>
      <ul>
        <li>Stk: {props.stack}</li>
        <li>Bet: {props.bet}</li>
      </ul>
    </div>
  );
}

export default CSSModules(Player, styles);

