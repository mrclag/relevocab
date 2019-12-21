import React, { useState } from 'react';
import firebase from '../firebase';

import { NewCardWrapper } from '../styles/NewCard.styles';

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

  console.log('render');
  return (
    <NewCardWrapper>
      <h3>New Card</h3>
      <form onSubmit={onSubmit}>
        <div>Eng</div>
        <input
          type="text"
          value={eng}
          onChange={e => setEng(e.currentTarget.value)}
          autoFocus={true}
          maxLength="14"
        />
        <div>Translation</div>
        <input
          type="text"
          value={foreign}
          onChange={e => setForeign(e.currentTarget.value)}
          maxLength="14"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </NewCardWrapper>
  );
};

export default NewCard;
