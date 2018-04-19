import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Situation from '../containers/Situation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Situation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Situation', () => {
  // Setup a clean wrapper before each test
  let props = {
    community: {
      board: ['As', '2s', 'Kh'],
      pot: 1.5,
    },
    players: [
      {
        active: true,
        bet: 0,
        folded: false,
        name: 'Button',
        stack: 100,
      },
      {
        active: false,
        bet: 0.5,
        folded: false,
        name: 'Small',
        stack: 99.5,
      },
      {
        active: false,
        bet: 1,
        folded: false,
        name: 'Big',
        stack: 99,
      },
    ],
  };
  let wrap;

  const wrapper = () => {
    if (!wrap) {
      wrap = shallow(<Situation {...props} />);
    }
    return wrap;
  };

  beforeEach(() => {
    props = {
      community: {
        board: ['As', '2s', 'Kh'],
        pot: 1.5,
      },
      players: [
        {
          active: true,
          bet: 0,
          folded: false,
          name: 'Button',
          stack: 100,
        },
        {
          active: false,
          bet: 0.5,
          folded: false,
          name: 'Small',
          stack: 99.5,
        },
        {
          active: false,
          bet: 1,
          folded: false,
          name: 'Big',
          stack: 99,
        },
      ],
    };
    wrap = undefined;
  });

  // ----- Tests -----//

  it('is wrapped without problem', () => {
    // wrapper should render a single top-level element
    const { length } = wrapper();
    expect(length).toEqual(1);
  });

  it('renders a table', () => {
    const { length } = wrapper().find('Table');
    expect(length).toEqual(1);
  });
});
