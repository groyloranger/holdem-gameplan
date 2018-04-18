// @flow
import React from 'react';

// import styles from '../styles/Player.module.css';

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

export default function Player(props: Props) {
  return (
    <div>
      <p>{props.name}</p>
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

