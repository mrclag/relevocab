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
    const filteredCards = cardPile.filter(card => card.id !== currentCard.id);
    setCardPile(filteredCards);
    setCurrentCard(getRandomCard(filteredCards));
  };

  const resetDeck = () => {
    setCardPile(currentCards);
    setCurrentCard(getRandomCard(currentCards));
  };

  return (
    <ContentWrapper>
      <div className="counter">
        {currentCards
          ? `Cards left in deck: ${cardPile.length || currentCards.length} / ${
              currentCards.length
            }`
          : ''}
      </div>
      {currentCard && currentDeck ? (
        <Card
          front={currentCard.front || currentDeck.value}
          back={currentCard.back}
        />
      ) : (
        <Card
          front={<div className="deckend-text">End of Deck</div>}
          back="End of Deck"
        />
      )}
      <div>
        {/* 
      If the current card is the title card,
        display start button
      Else:
        If there are no cards in the pile,
          display reset button
        else
          display good and again buttons
       */}
        {currentCard && currentCard.front === currentDeck.title ? (
          <CardButton color="#107bbd" onClick={() => resetDeck()}>
            Start
          </CardButton>
        ) : cardPile.length === 0 ? (
          <CardButton color="black" onClick={() => resetDeck()}>
            Reset
          </CardButton>
        ) : (
          <>
            <CardButton color="#C57B57" onClick={updateCard}>
              Again
            </CardButton>
            <CardButton color="#70A288" onClick={() => removeCard()}>
              Good
            </CardButton>
          </>
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
