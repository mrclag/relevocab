import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { AddButton } from '../styles/global-styles';
import firebase from '../firebase';

import { googleTranslate } from '../services/translate';

const Word = ({ word, deck }) => {
  const [translation, setTranslation] = useState('');

  useEffect(() => {
    console.log(word);
    googleTranslate.translate(word, 'es', function(err, translation) {
      if (err || !translation.translatedText) {
        setTranslation('no translation found');
      }
      // console.log(translation);
      setTranslation(translation.translatedText);
    });
  }, [word]);

  const onClick = () => {
    firebase
      .firestore()
      .collection(deck.value)
      .add({
        eng: word,
        foreign: translation
      });
  };

  return (
    <WordWrapper>
      <AddButton onClick={onClick}>+</AddButton>
      <br />
      <div style={{ marginLeft: '15px' }}>
        <span style={{ fontWeight: 'bold' }}>{word}</span>
        <br />
        <span>{translation}</span>
      </div>
      <hr />
    </WordWrapper>
  );
};

export default Word;

const WordWrapper = styled.div`
  height: 60px;
  width: 600px;
  display: flex;
  font-size: 0.8em;
  .title {
    font-weight: bold;
  }
`;
