import React, { useState, useEffect } from 'react';
import Card from '../Card';

import { connect } from 'react-redux';

import {
  ContentWrapper,
  CardButton
} from '../../styles/pages/StudyCards.styles';

const StudyCards = ({ currentDeck, currentCards }) => {
  const [cardPile, setCardPile] = useState({});
  const [currentCard, setCurrentCard] = useState({
    front: 'FRONT',
    back: 'BACK'
  });

  // setting the pile to the current cards whenever it is rerendered/new selection
  useEffect(() => {
    setCardPile(currentCards);
    setCurrentCard({ front: currentDeck.title, back: currentDeck.title });
  }, [currentCards]);

  // setting the pile to a dummy value when first loaded
  useEffect(() => {
    setCardPile(currentDeck.cards);
  }, []);

  const getRandomCard = cardPile => {
    let card = cardPile[Math.floor(Math.random() * cardPile.length)];
    return card;
  };

  const updateCard = () => {
    setCurrentCard(getRandomCard(cardPile));
  };

  const removeCard = () => {
    const filteredCards = cardPile.filter(
      card => card.front !== currentCard.front
    );
    setCardPile(filteredCards);
    setCurrentCard(getRandomCard(filteredCards));
  };

  const resetDeck = () => {
    setCardPile(currentCards);
    setCurrentCard(getRandomCard(currentCards));
  };

  return (
    <ContentWrapper>
      {currentCards
        ? `Cards left in deck: ${cardPile.length || 0} / ${currentCards.length}`
        : ''}
      {currentCard && currentDeck ? (
        <Card
          front={currentCard.front || currentDeck.value}
          back={currentCard.back}
        />
      ) : (
        <Card
          front={<div style={{ color: 'red' }}>End of Deck</div>}
          back="End of Deck"
        />
      )}
      <div>
        {cardPile.length > 0 ? (
          currentCard && currentCard.front !== currentDeck.title ? (
            <>
              <CardButton color="red" onClick={updateCard}>
                Again
              </CardButton>
              <CardButton color="green" onClick={() => removeCard()}>
                Good
              </CardButton>
            </>
          ) : (
            <CardButton color="#107bbd" onClick={() => resetDeck()}>
              Start
            </CardButton>
          )
        ) : (
          <CardButton color="black" onClick={() => resetDeck()}>
            Reset
          </CardButton>
        )}
      </div>
    </ContentWrapper>
  );
};

const mapStateToProps = state => {
  return {
    currentDeck: state.deck.currentDeck,
    currentCards: state.deck.currentCards
  };
};

export default connect(mapStateToProps)(StudyCards);
