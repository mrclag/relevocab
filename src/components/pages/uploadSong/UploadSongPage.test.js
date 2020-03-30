import React from 'react';
import { UploadSongPage } from './UploadSongPage.jsx';
import { shallow } from 'enzyme';

describe('UploadSongPage', () => {
  const uploadSongPage = shallow(<UploadSongPage />);

  it('renders correctly', () => {
    expect(uploadSongPage).toMatchSnapshot();
  });
});
