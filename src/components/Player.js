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
  return (
    <div>
      <p styleName="name" >{props.name}</p>
      <p>Stack: {props.stack}</p>
      <p>Bet: {props.bet}</p>
      {props.active &&
        <p>ACTIVE</p>
      }
      {props.folded &&
        <p>FOLDED</p>
      }
    </div>
  );
}

export default CSSModules(Player, styles);

