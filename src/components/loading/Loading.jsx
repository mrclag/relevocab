import React from 'react';
// First way to import
import ClipLoader from 'react-spinners/ClipLoader';

import {LoadingWrapper} from './Loading.styles'

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <LoadingWrapper>
        <div>
          <ClipLoader
            size={80}
            //size={"150px"} this also works
            color={'#123abc'}
            loading={this.state.loading}
          />
        </div>
        <div className="loading-text">Vocarta</div>
      </LoadingWrapper>
    );
  }
}

export default Loading;