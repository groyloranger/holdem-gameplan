// @flow
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Community.module.css';

type Props = {
  board?: string[],
  pot?: number,
};

// eslint-disable-next-line no-use-before-define
Community.defaultProps = {
  board: [],
  pot: 0,
};

function Community(props: Props) {
  function boardString() {
    const b = ((props.board) ? props.board.slice() : []);
    let str = '';
    for (let len = 5; len > 0; len -= 1) {
      const card = ((b.length === len) ? b.pop() : '__');
      // build the string from right to left
      str = ' '.concat(card).concat(str);
    }
    return str.trim();
  }

  function round() {
    const len = ((props.board) ? props.board.length : 0);
    let rnd;
    switch (len) {
      case 0:
        rnd = 'Preflop';
        break;
      case 3:
        rnd = 'Flop';
        break;
      case 4:
        rnd = 'Turn';
        break;
      case 5:
        rnd = 'River';
        break;
      default:
        rnd = 'Drawing';
        break;
    }
    return rnd;
  }

  return (
    <div styleName="wrapper">
      <div styleName="round">{round()}</div>
      <div styleName="board">{boardString()}</div>
      <div styleName="pot">Pot: {props.pot}</div>
    </div>
  );
}

export default CSSModules(Community, styles);

