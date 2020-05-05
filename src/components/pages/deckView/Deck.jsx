import React from 'react';
import { DeckWrapper } from './Deck.styles.js';
import { Button } from 'react-bootstrap';

const Deck = ({ deck }) => {
  return (
    <DeckWrapper>
      <img src="https://via.placeholder.com/150" className="deck-image"></img>
      <div className="deck-info">
        <div className="deck-title">{deck.name}</div>
        <div className="deck-cards">{deck.cards} cards</div>
        <div className="deck-buttons">
          <button className="practice">Practice</button>
          <button className="details">Details</button>
        </div>
      </div>
    </DeckWrapper>
  );
};

export default Deck;
