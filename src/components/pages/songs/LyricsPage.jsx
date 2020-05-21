import React, { useState } from 'react';
import SongResult from './SongResult';
import { connect } from 'react-redux';

import { getSongs } from '../../../store/actions/appActions';

import { LyricsPageWrapper } from './LyricsPage.styles';

export const LyricsPage = ({ getSongs, songsSearchResult }) => {
  const [searchInput, setSearchInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchInput('');
    getSongs();
  };

  return (
    <LyricsPageWrapper>
      <h1>Find Songs</h1>
      <form onSubmit={onSubmit} className="search-form">
        <input
          type="text"
          disabled={true}
          className="search-form-input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.currentTarget.value)}
        />
        <button type="submit" value="Submit" className="search-form-submit">
          Search
        </button>
      </form>
      {songsSearchResult && (
        <>
          <div className="results-count">
            Found {songsSearchResult.length} results:
          </div>
          <div className="results-songs">
            {songsSearchResult.map((song, i) => (
              <SongResult key={i} song={song} />
            ))}
          </div>
        </>
      )}
    </LyricsPageWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    songsSearchResult: state.app.songsSearchResult,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSongs: () => dispatch(getSongs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LyricsPage);
