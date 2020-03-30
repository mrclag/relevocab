import React from 'react';
import { Loading } from './Loading.jsx';
import { shallow } from 'enzyme';

describe('Loading', () => {
  const loading = shallow(<Loading />);

  it('renders correctly', () => {
    expect(loading).toMatchSnapshot();
  });
});
