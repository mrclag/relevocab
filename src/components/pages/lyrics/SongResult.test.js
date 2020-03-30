import React from 'react';
import { SongResult } from './SongResult.jsx';
import { shallow } from 'enzyme';

describe('SongResult', () => {
  const songResult = shallow(<SongResult />);

  it('renders correctly', () => {
    expect(songResult).toMatchSnapshot();
  });
});
