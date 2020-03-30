import React from 'react';
import { NewCard } from './AddNewCard.jsx';
import { shallow } from 'enzyme';

describe('AddNewCard', () => {
  const addNewCard = shallow(<NewCard />);

  it('renders correctly', () => {
    expect(addNewCard).toMatchSnapshot();
  });
});
