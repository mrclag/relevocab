import React, { useState } from 'react';
import SongResult from '../SongResult';
import styled from 'styled-components';

const LyricsPage = () => {
  // originally have hard data of lyrics to post /song libray
  // can search through songs
  // page shows song lyrics, artists, etc.
  // other content - movies - can get related words via fiverr?
  const [searchInput, setSearchInput] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    setSearchInput('');
  };

  return (
    <LyricsPageWrapper>
      <h1>Find Songs</h1>
      <form onSubmit={onSubmit} className="search-form">
        <input
          type="text"
          className="search-form-input"
          value={searchInput}
          onChange={e => setSearchInput(e.currentTarget.value)}
        />
        <button type="submit" value="Submit" className="search-form-submit">
          Search
        </button>
      </form>
      <div className="results-output">Found 5 results:</div>
      <div className="results">
        <SongResult name="First Result" />
        <SongResult name="Second Result" />
        <SongResult name="Third Result" />
        <SongResult name="Fourth Result" />
        <SongResult name="Fifth Result" />
        <SongResult name="Sixth Result" />
        <SongResult name="Seventh Result" />
      </div>
    </LyricsPageWrapper>
  );
};

export default LyricsPage;

const LyricsPageWrapper = styled.div`
  margin-left: 350px;
  width: 60vw;

  .search-form {
    &-input {
      height: 40px;
      width: 500px;
    }

    &-submit {
      color: #107bbd;
      margin-left: 10px;
      margin-top: 5px;
      height: 42px;
      width: 100px;
      background-color: white;
      border-radius: 5px;
      border: 1px solid #107bbd;
      outline: none;
      cursor: pointer;
    }
  }

  .results {
    width: 100%;
    height: 75vh;
    margin-top: 20px;
    overflow-y: scroll;

    &-result {
      height: 100px;
      /* border: 0.5px solid blue; */
      border-bottom: 0.5px solid black;
      margin-bottom: 10px;
    }
    &-output {
      font-size: 12px;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    &-title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    &-artist {
      font-size: 14px;
      font-style: italic;
      margin-bottom: 10px;
    }
    &-cards {
      color: darkblue;
      .card {
        border: 0.5px solid darkblue;
        margin-right: 3px;
        padding: 0px 10px;
        font-size: 0.8em;
      }
    }
  }
`;
