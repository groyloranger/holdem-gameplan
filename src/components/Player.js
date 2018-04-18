// @flow
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Player.module.css';

type Props = {
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

function Player(props: Props) {
  const state = () => {
    let s = 'inactive';
    if (props.active) { s = 'active'; }
    if (props.folded) { s = 'folded'; }
    return s;
  };

  return (
    <div styleName={state()}>
      <strong styleName="name" >{props.name}</strong>
      <ul>
        <li>Stk: {props.stack}</li>
        <li>Bet: {props.bet}</li>
      </ul>
    </div>
  );
}

export default CSSModules(Player, styles);

