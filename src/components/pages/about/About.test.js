import React from 'react';
import { About } from './About.jsx';
import { shallow } from 'enzyme';

describe('About', () => {
  const about = shallow(<About />);

  it('renders correctly', () => {
    expect(about).toMatchSnapshot();
  });
});
