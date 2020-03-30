import React from 'react';
import { SignIn } from './SignIn.jsx';
import { shallow } from 'enzyme';

describe('SignIn', () => {
  const signIn = shallow(<SignIn />);

  it('renders correctly', () => {
    expect(signIn).toMatchSnapshot();
  });
});
