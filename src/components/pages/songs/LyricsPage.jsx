import React, { useState } from 'react';
import SongResult from './SongResult';
import { connect } from 'react-redux';

import { getSongs } from '../../../store/actions/appActions';

import { LyricsPageWrapper } from './LyricsPage.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const LyricsPage = ({ getSongs, songsSearchResult }) => {
  const [searchInput, setSearchInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchInput('');
    getSongs();
  };

  return (
    <LyricsPageWrapper>
      <div className="top">
        <div className="search">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              disabled={true}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search Songs"
            />
            <button type="submit" value="Submit" id="submit-button">
              <FontAwesomeIcon
                icon={faSearch}
                className="search-icon"
                color="#107bbd;"
              />
            </button>
          </form>
        </div>
      </div>

      {songsSearchResult.length > 0 && (
        <div className='results-wrapper'>
          <div className="results-count">
            Found {songsSearchResult.length} results:
          </div>
          <div className="results-songs">
            {songsSearchResult.map((song, i) => (
              <SongResult key={i} song={song} />
            ))}
          </div>
        </div>
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
