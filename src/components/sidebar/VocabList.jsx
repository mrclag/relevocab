import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';

import {
  VocabListWrapper,
  DeleteButton
} from '../../styles/sidebar/VocabList.styles';

export const useVocab = deck => {
  const [vocabList, setVocabList] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection(deck.value)
      .orderBy('foreign', 'desc')
      .onSnapshot(snapshot => {
        const newVocab = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setVocabList(newVocab);
        console.log('Getting VocabList');
      });
  }, [deck]);

  return vocabList;
};

const VocabList = ({ deck }) => {
  const vocab = useVocab(deck);

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  function handleDeleteWord(word) {
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
  }

  console.log('Render vocablist');

  return (
    <VocabListWrapper>
      <h4 style={{ marginBottom: '0px' }}>Cards in "{deck.value}" deck</h4>
      <div style={{ marginLeft: '10px' }}>
        {vocab.map((word, i) => (
          <div key={word.id}>
            <span
              style={{
                cursor: 'pointer',
                marginRight: '15px'
              }}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
            >
              {word.foreign}{' '}
            </span>
            <span className={hovered ? '' : 'hide'}>{word.eng} </span>
            <DeleteButton onClick={() => handleDeleteWord(word)}>
              X
            </DeleteButton>
          </div>
        ))}
      </div>
    </VocabListWrapper>
  );
};

export default React.memo(VocabList);
