import React from 'react';
import { LandingPage } from './LandingPage.jsx';
import { shallow } from 'enzyme';

describe('LandingPage', () => {
  const landingPage = shallow(<LandingPage />);

  it('renders correctly', () => {
    expect(landingPage).toMatchSnapshot();
  });
});
