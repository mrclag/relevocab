import React, { useState } from 'react';
import { getWiki } from '../../services/wikiAPI.js';
import { countWords } from '../../utils/countWords.js';
import Word from '../Word';

const WikiPage = ({ deck }) => {
  const [page, setPage] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    getWiki(searchInput).then(content => setPage(countWords(content)));
  };

  return (
    <div>
      <div style={{ marginLeft: '400px' }}>
        <h1>WikiWords</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
        <div style={{ marginTop: '5vh' }}>
          {page.map((word, i) => (
            <Word key={i} deck={deck} word={word} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WikiPage;
