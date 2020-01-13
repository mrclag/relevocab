import React, { useState, useEffect } from 'react';
import { getWords } from '../../services/wordAPI.js';

import Word from '../Word';

const WordPage = ({ deck, words, addNewCard }) => {
  return (
    <div>
      {words &&
        words.map((word, i) => (
          <Word addNewCard={addNewCard} key={i} deck={deck} word={word.word} />
        ))}
    </div>
  );
};

export default WordPage;
