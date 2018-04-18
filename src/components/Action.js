// @flow
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Action.module.css';

export type AcProps = {
  fold: () => void,
  call: () => void,
  raise: () => void
};

// eslint-disable-next-line no-use-before-define
Action.defaultProps = {};


function Action(props: AcProps) {
  return (
    <div styleName="wrapper">
      <button styleName="fold" onClick={props.fold}>Fold</button>
      <button styleName="call" onClick={props.call}>Call</button>
      <button styleName="raise" onClick={props.raise}>Raise</button>
    </div>
  );
}

export default CSSModules(Action, styles);

