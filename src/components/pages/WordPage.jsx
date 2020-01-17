import React from 'react';
import Word from '../Word';

const WordPage = ({ deck, words }) => {
  return (
    <div>
      {words &&
        words.map((word, i) => <Word key={i} deck={deck} word={word.word} />)}
    </div>
  );
};

export default WordPage;
