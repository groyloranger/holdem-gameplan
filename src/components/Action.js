// @flow
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Action.module.css';

// export type AcProps = {};

// eslint-disable-next-line no-use-before-define
Action.defaultProps = {};

function Action(/* props: AcProps */) {
  return (
    <div styleName="wrapper">
      <button styleName="fold">Fold</button>
      <button styleName="call">Call</button>
      <button styleName="raise">Raise</button>
    </div>
  );
}

export default CSSModules(Action, styles);

