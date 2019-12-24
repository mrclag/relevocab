import React, { useState } from 'react';
import firebase from '../../firebase';
import { googleTranslate } from '../../services/translate';

import { NewCardWrapper } from '../../styles/sidebar/NewCard.styles';

const NewCard = ({ deck }) => {
  const [eng, setEng] = useState('');
  const [foreign, setForeign] = useState('');

  const addWord = () => {
    firebase
      .firestore()
      .collection(deck.value)
      .add({
        eng: eng,
        foreign: foreign
      });
  };

  const onSubmit = e => {
    e.preventDefault();
    addWord();
    setEng('');
    setForeign('');
  };

  const translateInput = input => {
    googleTranslate.translate(input, 'es', function(err, translation) {
      if (err || !translation.translatedText) {
        setForeign('no translation found');
      }
      setForeign(translation.translatedText);
    });
  };

  console.log('Render NewCard');
  return (
    <NewCardWrapper>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Front of card"
            value={eng}
            onChange={e => setEng(e.currentTarget.value)}
            autoFocus={true}
            maxLength="14"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Back of card"
            value={foreign}
            onChange={e => setForeign(e.currentTarget.value)}
            maxLength="14"
          />
        </div>
        <button style={{ width: '240px' }}>Add New Card</button>
      </form>
      <button onClick={() => translateInput(eng)} style={{ width: '240px' }}>
        Translate
      </button>
    </NewCardWrapper>
  );
};

export default NewCard;
