import React from 'react';
import { DeckView } from './DeckViewer.jsx';
import { shallow } from 'enzyme';

describe('DeckViewer', () => {
  const deckViewer = shallow(<DeckView />);

  it('renders correctly', () => {
    expect(deckViewer).toMatchSnapshot();
  });
});
