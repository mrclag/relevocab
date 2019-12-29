import React, { useState } from 'react';

import firebase from '../firebase';
import { DeleteButton } from '../styles/sidebar/VocabList.styles';

const handleDeleteWord = (deck, word) => {
  const wordRef = firebase
    .firestore()
    .collection(deck.value)
    .doc(word.id);
  wordRef
    .delete()
    .then(() => {
      console.log(`Document with ID ${word.id} deleted`);
    })
    .catch(err => {
      console.error('Error deleting document:', err);
    });
};

const CardListItem = ({ deck, word }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  console.log('Render CardListItem: ' + word.value);

  return (
    <div>
      <span
        style={{
          cursor: 'pointer',
          marginRight: '20px',
          color: hovered ? '#107bbd' : 'black'
        }}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        {word.foreign}{' '}
      </span>
      <span className={hovered ? '' : 'hide'}>{word.eng} </span>
      <DeleteButton onClick={() => handleDeleteWord(deck, word)}>
        X
      </DeleteButton>
    </div>
  );
};

export default React.memo(CardListItem);