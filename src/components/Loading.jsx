import React from 'react';
// First way to import
import ClipLoader from 'react-spinners/ClipLoader';

import styled from 'styled-components';

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
        <div className="loading-text">Relevocab</div>
      </LoadingWrapper>
    );
  }
}

export default Loading;

const LoadingWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  text-align: center;
  flex-direction: column;

  .loading-text {
    font-size: 1.4em;
    margin-top: 5vh;
    color: #123abc;
    font-family: Cairo;
  }
`;
