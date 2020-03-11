import React, { useState, useEffect } from 'react';
import Card from './Card';

import { connect } from 'react-redux';

import { ContentWrapper, CardButton } from './StudyCards.styles';

const StudyCards = ({ currentDeck, currentCards }) => {
  const [cardPile, setCardPile] = useState({});
  const [currentCard, setCurrentCard] = useState({});
  const [flipped, setFlipped] = useState(false);

  // setting the pile to the current cards whenever it is rerendered/new selection
  useEffect(() => {
    setCardPile(currentCards);
  }, [currentCards]);

  const getRandomCard = cardPile => {
    let card = cardPile[Math.floor(Math.random() * cardPile.length)];
    console.log('getrandomcard, cardPile: ', cardPile)
    return card;
  };

  const updateCard = () => {
    setCurrentCard(getRandomCard(cardPile));
    setFlipped(false);
  };

  const removeCard = () => {
    const filteredCards = cardPile.filter(card => card.id !== currentCard.id);
    setCardPile(filteredCards);
    setCurrentCard(getRandomCard(filteredCards));
    setFlipped(false);
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
