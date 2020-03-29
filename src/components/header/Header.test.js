import React from 'react';
import Header from './Header.jsx';

import { shallow } from 'enzyme';

describe('Header', () => {
  const app = shallow(<Header />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
});
