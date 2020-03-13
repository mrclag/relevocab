import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { ContentWrapper, CardButton } from './StudyCards.styles';

import Card from './Card';

const StudyCards = ({ currentDeck, currentCards }) => {
  const [cardPile, setCardPile] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [flipped, setFlipped] = useState(false);

  const updateCard = () => {
    // Remove current card from top of pile, put it at the rear
    const oldCard = cardPile[0];
    const newCardPile = cardPile.slice(1, cardPile.length);
    newCardPile.push(oldCard);
    setCardPile(newCardPile);
    setCurrentCard(cardPile[0]);
    setFlipped(false);
    console.log('update card, cardpile: ', cardPile);
  };

  const removeCard = () => {
    const newCardPile = cardPile.slice(1, cardPile.length);
    setCardPile(newCardPile);
    setCurrentCard(cardPile[0]);
    setFlipped(false);
  };

  const randomizeDeck = () => {
    setCurrentCard(null);
    // converting object of cards to array
    const cards = Object.keys(currentDeck.cards).map(
      (key, i) => currentDeck.cards[key]
    );
    // Fisher shuffle: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    setCardPile(cards);
    setCurrentCard(cards[0]);
  };

  return (
    <ContentWrapper>
      <div className="counter">
        {cardPile.length ? `Cards left in deck: ${cardPile.length}` : ''}
      </div>

      {currentCard ? (
        <Card
          front={currentCard.front || currentDeck.title}
          back={currentCard.back}
          flipped={flipped}
          setFlipped={setFlipped}
        />
      ) : (
        <Card
          front={<div className="deckend-text">End of Deck</div>}
          back="End of Deck"
          flipped={flipped}
          setFlipped={setFlipped}
        />
      )}
      <div>
        {currentCard === null ? (
          <CardButton color="#107bbd" onClick={() => randomizeDeck()}>
            Start
          </CardButton>
        ) : cardPile.length === 0 ? (
          <CardButton color="black" onClick={() => randomizeDeck()}>
            Reset
          </CardButton>
        ) : (
          <>
            <CardButton color="#C57B57" onClick={() => updateCard()}>
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
