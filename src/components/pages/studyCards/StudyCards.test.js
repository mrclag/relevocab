import React from 'react';
import { StudyCards } from './StudyCards.jsx';
import { shallow } from 'enzyme';

describe('StudyCards', () => {
  const studyCards = shallow(<StudyCards />);

  it('renders correctly', () => {
    expect(studyCards).toMatchSnapshot();
  });
});
