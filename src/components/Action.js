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
      Action
    </div>
  );
}

export default CSSModules(Action, styles);

