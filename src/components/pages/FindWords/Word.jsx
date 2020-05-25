import React, { useState, useEffect } from 'react';
import { googleTranslate } from '../../../services/translate';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { addNewCard } from '../../../store/actions/deckActions';

import { WordWrapper } from './Word.styles';

export const Word = ({ currentDeck, word, addNewCard, selected }) => {
  const [translation, setTranslation] = useState('');
  let selectedWord = selected === word;

  useEffect(() => {
    googleTranslate.translate(word, 'es', function (err, translation) {
      if (err || !translation.translatedText) {
        setTranslation('no translation found');
      }
      setTranslation(translation.translatedText);
    });
  }, [word]);

  const onClick = () => {
    currentDeck.title
      ? addNewCard({
          front: word,
          back: translation,
        })
      : alert('Please select a deck to add a card');
  };

  return (
    <WordWrapper selectedWord={selectedWord}>
      <div className="add-button" onClick={onClick}>
        <FontAwesomeIcon icon={faPlus} className="plus" />
      </div>
      <div className="word-text-front">
        <span className="word-word">{word}</span>
      </div>
      <div className="word-text-back">
        <span>{translation}</span>
      </div>
    </WordWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    currentDeck: state.deck.currentDeck,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewCard: (card) => dispatch(addNewCard(card)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Word);
