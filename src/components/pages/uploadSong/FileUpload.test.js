import React from 'react';
import { FileUpload } from './FileUpload.jsx';
import { shallow } from 'enzyme';

describe('FileUpload', () => {
  const fileupload = shallow(<FileUpload />);

  it('renders correctly', () => {
    expect(fileupload).toMatchSnapshot();
  });
});
