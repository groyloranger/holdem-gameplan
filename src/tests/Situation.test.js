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
  let props;
  let wrap;

  const wrapper = () => {
    if (!wrap) {
      wrap = shallow(<Situation {...props} />);
    }
    return wrap;
  };

  beforeEach(() => {
    props = {};
    wrap = undefined;
  });

  // ----- Tests -----//

  it('is wrapped without problem', () => {
    // wrapper should render a single top-level element
    const { length } = wrapper();
    expect(length).toEqual(1);
  });
});
