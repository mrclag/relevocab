import React from 'react';
import { SongLine } from './SongLine.jsx';
import { shallow } from 'enzyme';

describe('SongLine', () => {
  const songLine = shallow(<SongLine />);

  it('renders correctly', () => {
    expect(songLine).toMatchSnapshot();
  });
});
