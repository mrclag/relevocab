import React from 'react';
import { Word } from './Word.jsx';
import { shallow } from 'enzyme';

describe('Word', () => {
  const word = shallow(<Word />);

  it('renders correctly', () => {
    expect(word).toMatchSnapshot();
  });
});
