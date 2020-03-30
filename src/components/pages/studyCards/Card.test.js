import React from 'react';
import { Card } from './Card.jsx';
import { shallow } from 'enzyme';

describe('Card', () => {
  const card = shallow(<Card />);

  it('renders correctly', () => {
    expect(card).toMatchSnapshot();
  });
});
