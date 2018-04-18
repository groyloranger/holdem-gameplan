// @flow
import React from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/Table.module.css';

// type Props = {};

// eslint-disable-next-line no-use-before-define
Table.defaultProps = {};

function Table(/* props: Props */) {
  return (
    <div styleName="wrapper">
      Table
    </div>
  );
}

export default CSSModules(Table, styles);

