import React, { useState, useEffect } from 'react';
import { getWords } from '../../services/wordAPI.js';

import Word from '../Word';

const WordPage = ({ deck }) => {
  const [words, setWords] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    getWords(searchInput).then(data => setWords(data));
  }, [searchInput]);

  return (
    <div style={{ marginLeft: '400px' }}>
      <h1>Words</h1>
      <input
        type="text"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <div style={{ marginTop: '5vh' }}>
        {words.map((word, i) => (
          <Word key={i} deck={deck} word={word.word} />
        ))}
      </div>
    </div>
  );
};

export default WordPage;
