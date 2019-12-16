import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import DrawButton from './components/DrawButton';
import VocabList from './components/VocabList';

import styled from 'styled-components';

import firebase from './firebase';

const App = () => {
  const [cards, setCards] = useState([
    { id: 1, eng: 'English', span: 'Ingles' },
    { id: 2, eng: 'English2', span: 'Ingles2' },
    { id: 3, eng: 'English3', span: 'Ingles3' },
    { id: 4, eng: 'English4', span: 'Ingles4' },
    { id: 5, eng: 'English5', span: 'Ingles5' },
    { id: 6, eng: 'English6', span: 'Ingles6' }
  ]);
  const [currentCard, setCurrentCard] = useState({});

  useEffect(() => {
    setCurrentCard(getRandomCard(cards));
    firebase
      .firestore()
      .collection('words')
      .orderBy('foreign', 'desc')
      .onSnapshot(snapshot => {
        const newVocab = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCards(newVocab);
        console.log('rerender main');
      });
  }, []);

  const getRandomCard = currentCards => {
    let card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  };

  const updateCard = () => {
    setCurrentCard(getRandomCard(cards));
  };

  return (
    <div className="App">
      <VocabList />
      <ContentWrapper>
        <Card eng={currentCard.eng} foreign={currentCard.foreign} />
        <DrawButton drawCard={updateCard} />
      </ContentWrapper>
    </div>
  );
};

export default App;

const ContentWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  left: 40%;
`;
