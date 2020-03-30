import React from 'react';
import { Header } from './Header.jsx';
import { shallow } from 'enzyme';

describe('Header', () => {
  const header = shallow(<Header />);

  it('renders correctly', () => {
    expect(header).toMatchSnapshot();
  });
});
