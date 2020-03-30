import React from 'react';
import { Instructions } from './Instructions.jsx';
import { shallow } from 'enzyme';

describe('Instructions', () => {
  const instructions = shallow(<Instructions />);

  it('renders correctly', () => {
    expect(instructions).toMatchSnapshot();
  });
});
