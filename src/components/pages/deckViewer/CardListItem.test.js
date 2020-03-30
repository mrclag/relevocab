import React from 'react';
import { CardListItem } from './CardListItem.jsx';
import { shallow } from 'enzyme';

describe('CardListItem', () => {
  const cardListItem = shallow(<CardListItem />);

  it('renders correctly', () => {
    expect(cardListItem).toMatchSnapshot();
  });
});
