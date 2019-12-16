import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

export const useVocab = () => {
  const [vocabList, setVocabList] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('words')
      .orderBy('foreign', 'desc')
      .onSnapshot(snapshot => {
        const newVocab = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setVocabList(newVocab);
        console.log('rerender');
      });
  }, []);

  return vocabList;
};

const VocabList = () => {
  const vocab = useVocab();
  return (
    <div>
      <h2>Vocab</h2>
      <ul>
        {vocab.map((word, i) => (
          <li key={word.id}>
            {word.foreign} : {word.eng}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VocabList;
