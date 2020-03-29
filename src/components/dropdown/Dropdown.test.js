import React from 'react';
import Dropdown from './Dropdown.jsx';

import { shallow } from 'enzyme';

describe('Dropdown', () => {
  const app = shallow(<Dropdown />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
});
