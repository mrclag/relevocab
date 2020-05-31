import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getWikiPage } from '../../../services/wikiAPI.js';
import { countWords } from '../../../utils/countWords.js';
import { getWords } from '../../../services/wordAPI.js';

import Word from './Word';

import { FindWordsWrapper } from './FindWordsPage.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const FindWordsPage = ({ addNewCard, currentDeck }) => {
  const [page, setPage] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    getWikiPage(searchInput)
      .then((res) => {
        res.rawContent().then((content) => {
          setPage({
            raw: res.raw,
            words: countWords(content),
            content: content,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSelect = (word) => {
    setSelectedWord(word);
    getWords(word).then((data) => {
      setWords(data);
    });
  };

  return (
    <FindWordsWrapper>
      <div className="top">
        <div className="search">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Find Related Words"
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
      {page.words && (
        <div className="results">
          <div className="results-words">
            {page.words.slice(0, 20).map((word, i) => (
              <div
                key={i}
                style={{ display: 'flex', flexDirection: 'row' }}
                onClick={() => onSelect(word)}
              >
                <Word word={word} selected={selectedWord} />
              </div>
            ))}
          </div>
          <div className="moreWords">
            {selectedWord &&
              words.map((word, i) => <Word key={i} word={word.word} />)}
          </div>
        </div>
      )}
    </FindWordsWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    currentDeck: state.deck.currentDeck,
  };
};

export default connect(mapStateToProps)(FindWordsPage);
