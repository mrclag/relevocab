import React from 'react';
import { SignUp } from './SignUp.jsx';
import { shallow } from 'enzyme';

describe('SignUp', () => {
  const signUp = shallow(<SignUp />);

  it('renders correctly', () => {
    expect(signUp).toMatchSnapshot();
  });
});
