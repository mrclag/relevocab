import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SongSearchWrapper } from './SongSearch.styles.js';
import { Container } from '@material-ui/core';
import SongResult from './SongResult';

import UploadSong from './UploadSong';

import { getSongs } from '../../../store/actions/appActions';

const SongSearch = ({ getSongs, songsSearchResult }) => {
  const [searchInput, setSearchInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchInput('');
    getSongs();
  };

  return (
    <Container>
      <SongSearchWrapper>
        <div className="left">
          <div className="search-box">
            <form onSubmit={onSubmit} className="search-form">
              <input
                type="text"
                disabled={true}
                className="search-form-input"
                value={searchInput}
                onChange={(e) => setSearchInput(e.currentTarget.value)}
              />
              <button
                type="submit"
                value="Submit"
                className="search-form-submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="results">
            <div className="results-title"></div>
            <div className="results-results">
              {songsSearchResult && (
                <>
                  <div className="results-output">
                    Found {songsSearchResult.length} results:
                  </div>
                  {songsSearchResult.map((song, i) => (
                    <SongResult key={i} song={song} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="right">
          <UploadSong />
        </div>
      </SongSearchWrapper>
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state.app);
  return {
    songsSearchResult: state.app.songsSearchResult,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSongs: () => dispatch(getSongs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongSearch);
