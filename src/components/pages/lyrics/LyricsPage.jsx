import React, { useState } from 'react';
import SongResult from './SongResult';
import { mapSongData } from '../../../utils/createLyricCards';

import { LyricsPageWrapper } from './LyricsPage.styles.js';

const LyricsPage = () => {
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
        {Object.keys(mapSongData(bigData)).map((key, i) => (
          <SongResult key={i} data={bigData[key]} />
        ))}
      </div>
    </LyricsPageWrapper>
  );
};

export default LyricsPage;

const bigData = {
  1: {
    title: 'This is a test',
    artist: 'Capn Crunch',
    lyrics:
      'Who lives in a pineapple under the sea? Spongebob Squarepants! Absorbant and yellow and poreous is he!'
  },
  2: {
    title: 'An awesome song',
    artist: 'Matt Clagett',
    lyrics:
      'Here is a bunch of random words porcupine apple table jump red seventeen'
  },
  3: {
    title: 'Truth',
    artist: 'Higher Power',
    lyrics:
      'I always go to starbucks and just get a free hot water so I can make tea or ramen'
  },
  4: {
    title: 'Directions',
    artist: 'Google Maps',
    lyrics:
      'Take a left turn at main street and then keep going down until you get to target and then buy me a new pillow'
  },
  5: {
    title: 'Love song',
    artist: 'Romeo Santos',
    lyrics:
      'Ooh la la la la eso es una cancion de amor. Chingar conmigo y vas a tener buena suerte.'
  }
};
