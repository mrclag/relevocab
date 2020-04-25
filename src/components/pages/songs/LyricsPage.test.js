import React from 'react';
import { LyricsPage } from './LyricsPage.jsx';
import { shallow } from 'enzyme';

describe('LyricsPage', () => {
  const lyricsPage = shallow(<LyricsPage />);

  it('renders correctly', () => {
    expect(lyricsPage).toMatchSnapshot();
  });
});
