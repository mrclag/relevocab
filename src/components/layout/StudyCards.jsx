import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';

import styled from 'styled-components';

import Card from '../Card';

const StudyCards = ({ deck }) => {
  console.log('rerender studycard');
  const [cards, setCards] = useState([
    {
      id: 0,
      eng: 'Deck of Cards',
      foreign: 'Deck of Cards'
    }
  ]);
  const [currentCard, setCurrentCard] = useState({});
  const [currentDeck, setCurrentDeck] = useState([]);

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

        setCurrentDeck(newVocab);
        setCards(newVocab);
      });
  }, [deck]);

  const getRandomCard = currentCards => {
    let card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  };

  const updateCard = () => {
    setCurrentCard(getRandomCard(cards));
  };

  const removeCard = () => {
    const filteredCards = cards.filter(card => card.id !== currentCard.id);
    setCards(filteredCards);
    setCurrentCard(getRandomCard(filteredCards));
  };

  const resetDeck = () => {
    setCards(currentDeck);
    setCurrentCard(getRandomCard(currentDeck));
  };

  return (
    <ContentWrapper>
      Cards in deck: {cards.length} / {currentDeck.length}
      {currentCard ? (
        <Card eng={currentCard.eng} foreign={currentCard.foreign} />
      ) : (
        <Card
          eng={<div style={{ color: 'red' }}>End of Deck</div>}
          foreign="End of Deck"
        />
      )}
      <div>
        {cards.length > 0 ? (
          <>
            <CardButton color="red" onClick={updateCard}>
              Again
            </CardButton>
            <CardButton color="green" onClick={() => removeCard()}>
              Good
            </CardButton>
          </>
        ) : (
          <CardButton color="black" onClick={() => resetDeck()}>
            Reset
          </CardButton>
        )}
      </div>
    </ContentWrapper>
  );
};

export default StudyCards;

const ContentWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 200px;
  left: 40%;
`;

const CardButton = styled.button`
  height: 50px;
  width: 75px;
  background-color: ${props => props.color};
  border: none;
  color: white;
  margin: 10px;
`;
