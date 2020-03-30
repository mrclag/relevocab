import React from 'react';
import { DeckInfoBar } from './DeckInfoBar.jsx';
import { shallow } from 'enzyme';

describe('DeckInfoBar', () => {
  const deckInfoBar = shallow(<DeckInfoBar />);

  it('renders correctly', () => {
    expect(deckInfoBar).toMatchSnapshot();
  });
});
