import React, { useState, useEffect } from 'react';
import { getWords } from '../../services/wordAPI.js';

import Word from '../Word';
import WordGraph from '../WordGraph';

const WordPage = () => {
  const [word, setWord] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    getWords(searchInput).then(data => setWord(data));
  }, [searchInput]);

  const data = {
    nodes: [{ id: searchInput }],
    links: []
  };

  word.forEach(val => {
    data.nodes.push({ id: val.word });
    data.links.push({ source: searchInput, target: val.word });
  });

  console.log(word);
  console.log('passed:', data);
  return (
    <div style={{ marginLeft: '400px' }}>
      <h1>Words</h1>
      <input
        type="text"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <div style={{ marginTop: '5vh' }}>
        <WordGraph data={data} />
      </div>
    </div>
  );
};

export default WordPage;
