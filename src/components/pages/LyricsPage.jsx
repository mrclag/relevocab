import React, { useState, useEffect } from 'react';
import { getLyrics } from '../../services/scrapeLyrics';

const LyricsPage = () => {
  const [lyrics, setLyrics] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    getLyrics('bad bunny', 'vete');
  };

  return (
    <div style={{ marginLeft: '400px' }}>
      <h1>Lyrics</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>

      <div style={{ marginTop: '5vh' }}>{lyrics}</div>
    </div>
  );
};

export default LyricsPage;
