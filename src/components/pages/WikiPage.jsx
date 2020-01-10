import React, { useState } from 'react';
import { getWikiPage } from '../../services/wikiAPI.js';
import { countWords } from '../../utils/countWords.js';
import Word from '../Word';

const WikiPage = ({ deck }) => {
  const [page, setPage] = useState({});
  const [searchInput, setSearchInput] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    getWikiPage(searchInput)
      .then(res => {
        console.log(res);
        res.rawContent().then(content => {
          setPage({ raw: res.raw, words: countWords(content) });
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  console.log(page);

  return (
    <div>
      <div style={{ marginLeft: '400px' }}>
        <h1>Find Related Words</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
        <div style={{ marginTop: '3vh' }}>
          <h3>{page.raw ? page.raw.title : 'No page found'}</h3>
          <div>
            <a
              style={{ textDecoration: 'none', color: 'black' }}
              href={page.raw ? page.raw.fullurl : 'Loading'}
            >
              {page.raw ? page.raw.fullurl : ''}
            </a>
          </div>
          <div style={{ marginTop: '3vh' }}>
            {page.words
              ? page.words
                  .slice(0, 15)
                  .map((word, i) => <Word key={i} deck={deck} word={word} />)
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WikiPage;
