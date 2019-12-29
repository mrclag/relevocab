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
      <div className="cards-title">
        <h4>CARDS</h4>
      </div>

      <div
        style={{
          marginLeft: '10px',
          height: '45vh',
          overflowY: 'overlay scroll',
          overflowX: 'hidden'
        }}
      >
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
