import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { AddButton } from '../styles/global-styles';
import firebase from '../firebase';

import { googleTranslate } from '../services/translate';
import pb from '../images/plus_blue.png';
import pw from '../images/plus_white.png';

const Word = ({ word, addNewCard, selected }) => {
  const [translation, setTranslation] = useState('');
  let selectedWord = selected == word;

  useEffect(() => {
    googleTranslate.translate(word, 'es', function(err, translation) {
      if (err || !translation.translatedText) {
        setTranslation('no translation found');
      }
      setTranslation(translation.translatedText);
    });
  }, [word]);

  const onClick = () => {
    addNewCard({
      front: word,
      back: translation
    });
  };

  return (
    <WordWrapper selectedWord={selectedWord}>
      <AddButton selectedWord={selectedWord} onClick={onClick}>
        <img
          src={selectedWord ? pw : pb}
          alt="plus"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </AddButton>
      <br />
      <div style={{ marginLeft: '15px' }}>
        <span style={{ fontWeight: 'bold' }}>{word}</span>
        <br />
        <span>{translation}</span>
      </div>
    </WordWrapper>
  );
};

export default Word;

const WordWrapper = styled.div`
  height: 40px;
  width: 200px;
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: ${props => (props.selectedWord ? 'white' : 'black')};
  background: ${props => (props.selectedWord ? '#107bbd' : 'white')}
  cursor: pointer;
  padding: 10px;
  display: flex;
  font-size: 0.8em;
  .title {
    font-weight: bold;
  }
`;
