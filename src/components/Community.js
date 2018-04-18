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

  return (
    <div styleName="wrapper">
      <center styleName="board">{boardString()}</center>
      <center styleName="pot">{props.pot}</center>
    </div>
  );
}

export default CSSModules(Community, styles);

