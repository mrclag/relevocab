import React from 'react';
import { FindWordsPage } from './FindWordsPage.jsx';
import { shallow } from 'enzyme';

describe('FindWordsPage', () => {
  const findWordsPage = shallow(<FindWordsPage />);

  it('renders correctly', () => {
    expect(findWordsPage).toMatchSnapshot();
  });
});
