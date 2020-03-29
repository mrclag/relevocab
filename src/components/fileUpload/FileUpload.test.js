import React from 'react';
import FileUpload from './FileUpload.jsx';

import { shallow } from 'enzyme';

describe('FileUpload', () => {
  const app = shallow(<FileUpload />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
});
