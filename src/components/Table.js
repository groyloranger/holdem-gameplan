// @flow
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Table.module.css';
import Player from './Player';
import Community from './Community';

// type Props = {};

// eslint-disable-next-line no-use-before-define
Table.defaultProps = {};

function Table(/* props: Props */) {
  const wrap = (Component, style, prps) => (
    <div styleName={style}>
      <Component {...prps} />
    </div>
  );

  return (
    <div styleName="wrapper">
      {wrap(Community, 'community')}
      {wrap(Player, 'sb', { name: 'Small' })}
      {wrap(Player, 'bb', { name: 'Big' })}
      {wrap(Player, 'bu', { name: 'Button' })}
    </div>
  );
}

export default CSSModules(Table, styles);

