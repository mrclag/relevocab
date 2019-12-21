import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

import { VocabListWrapper, DeleteButton } from '../styles/VocabList.styles';

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
        console.log('rerender');
      });
  }, [deck]);

  return vocabList;
};

const VocabList = ({ deck }) => {
  const vocab = useVocab(deck);

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

  console.log('re-render vocablist');

  return (
    <VocabListWrapper>
      <div>
        <h3>{deck.value}</h3>
        {vocab.map((word, i) => (
          <div key={word.id}>
            {word.foreign} : {word.eng}
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
