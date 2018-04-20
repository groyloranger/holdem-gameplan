import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Situation from '../containers/Situation';
import { activePlayerKey } from '../logic/Situation.logic';
import { init3h } from '../static/GameState';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Situation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Situation', () => {
  // Setup a clean wrapper before each test
  let props;
  let wrap;

  const wrapper = () => {
    if (!wrap) {
      wrap = shallow(<Situation {...props} />);
    }
    return wrap;
  };

  beforeEach(() => {
    props = init3h;
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

  describe('fold action', () => {
    it('folds the active player', () => {
      // Find key to active player
      const key = activePlayerKey(wrapper().state().players);

      // activePlayer should not be folded
      let activePlayer = wrapper().state().players[key];
      expect(activePlayer.folded).toBeFalsy();

      // Fold action
      wrapper().instance().fold();
      wrapper().update();

      // activePlayer should be folded
      activePlayer = wrapper().state().players[key];
      expect(activePlayer.folded).toBeTruthy();
    });
  });

  describe('call action', () => {
    it('call with active player', () => {
      // Find key to active player
      const key = activePlayerKey(wrapper().state().players);

      // activePlayer should have default stack
      let activePlayer = wrapper().state().players[key];
      expect(activePlayer.bet).toEqual(0);
      expect(activePlayer.stack).toEqual(100);

      // Call action
      wrapper().instance().call();
      wrapper().update();

      // activePlayer should have changed bet and stack
      activePlayer = wrapper().state().players[key];
      expect(activePlayer.bet).toEqual(1);
      expect(activePlayer.stack).toEqual(99);
    });
  });
});
