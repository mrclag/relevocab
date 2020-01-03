import React, { useState } from 'react';
// import firebase from '../../firebase';
import { googleTranslate } from '../../services/translate';

import { NewCardWrapper } from '../../styles/sidebar/NewCard.styles';

const NewCard = ({ deck }) => {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  // const addWord = () => {
  //   firebase
  //     .firestore()
  //     .collection(deck.title)
  //     .add({
  //       front: eng,
  //       back: foreign
  //     });
  // };

  const onSubmit = e => {
    e.preventDefault();
    // addWord();
    // setFront('');
    // setBack('');
  };

  const translateInput = input => {
    googleTranslate.translate(input, 'es', function(err, translation) {
      if (err || !translation.translatedText) {
        setBack('no translation found');
      }
      setBack(translation.translatedText);
    });
  };

  return (
    <NewCardWrapper>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Front of card"
            value={front}
            onChange={e => setFront(e.currentTarget.value)}
            autoFocus={true}
            maxLength="14"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Back of card"
            value={back}
            onChange={e => setBack(e.currentTarget.value)}
            maxLength="14"
          />
        </div>
        <button style={{ width: '240px' }}>Add New Card</button>
      </form>
      <button onClick={() => translateInput(front)} style={{ width: '240px' }}>
        Translate
      </button>
    </NewCardWrapper>
  );
};

export default NewCard;
