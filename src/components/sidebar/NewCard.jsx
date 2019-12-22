import React, { useState } from 'react';
import firebase from '../../firebase';

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

  console.log('Render NewCard');
  return (
    <NewCardWrapper>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            value={eng}
            onChange={e => setEng(e.currentTarget.value)}
            autoFocus={true}
            maxLength="14"
          />
          English
        </div>
        <div>
          <input
            type="text"
            value={foreign}
            onChange={e => setForeign(e.currentTarget.value)}
            maxLength="14"
          />
          Translation
        </div>
        <button>Add New Card</button>
      </form>
    </NewCardWrapper>
  );
};

export default NewCard;
