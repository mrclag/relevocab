import React from 'react';
// First way to import
import ClipLoader from 'react-spinners/ClipLoader';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div>
          <ClipLoader
            size={100}
            //size={"150px"} this also works
            color={'#123abc'}
            loading={this.state.loading}
          />
        </div>
        <div
          style={{ fontSize: '1.5em', color: '#123abc', fontFamily: 'Cairo' }}
        >
          loading...
        </div>
      </div>
    );
  }
}

export default Loading;
