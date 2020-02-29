import React, { useState } from 'react';
import { getWikiPage } from '../../services/wikiAPI.js';
import { countWords } from '../../utils/countWords.js';
import Word from '../Word';
import { connect } from 'react-redux';
import { getWords } from '../../services/wordAPI.js';

import { WikiPageWrapper } from '../../styles/pages/WikiPage.styles';

const WikiPage = ({ addNewCard, currentDeck }) => {
  const [page, setPage] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);

  const onSubmit = e => {
    e.preventDefault();
    getWikiPage(searchInput)
      .then(res => {
        res.rawContent().then(content => {
          setPage({
            raw: res.raw,
            words: countWords(content),
            content: content
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onSelect = word => {
    setSelectedWord(word);
    getWords(word).then(data => {
      setWords(data);
    });
  };

  return (
    <WikiPageWrapper>
      <div className="top">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            placeholder="Find Related Words"
          />
          <button type="submit" value="Submit" id="submit-button">
            Search
          </button>
        </form>
      </div>
      <div>
        <div className="results">
          <div className="both-results">
            <div className="results-words">
              {page.words
                ? page.words.slice(0, 15).map((word, i) => (
                    <div
                      key={i}
                      style={{ display: 'flex', flexDirection: 'row' }}
                    >
                      <div>
                        <Word word={word} selected={selectedWord} />
                      </div>
                      <div
                        className="search-moreWords"
                        onClick={() => onSelect(word)}
                      >
                        >
                      </div>
                    </div>
                  ))
                : ''}
            </div>
            {selectedWord && (
              <div className="moreWords">
                {words &&
                  words.map((word, i) => <Word key={i} word={word.word} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </WikiPageWrapper>
  );
};

const mapStateToProps = state => {
  return {
    currentDeck: state.deck.currentDeck
  };
};

export default connect(mapStateToProps)(WikiPage);
