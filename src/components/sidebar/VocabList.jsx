import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';

import CardListItem from '../CardListItem';

import { VocabListWrapper } from '../../styles/sidebar/VocabList.styles';

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
  }, [deck.value]);
  return vocabList;
};

const VocabList = ({ deck }) => {
  const vocab = useVocab(deck);

  console.log('Render vocablist');

  return (
    <VocabListWrapper>
      <h4 style={{ marginBottom: '10px' }}>CARDS</h4>
      <div style={{ marginLeft: '10px' }}>
        {vocab.map((word, i) => (
          <div className="card-list-item" key={word.id}>
            <CardListItem deck={deck} word={word} />
          </div>
        ))}
      </div>
    </VocabListWrapper>
  );
};

export default React.memo(VocabList);
