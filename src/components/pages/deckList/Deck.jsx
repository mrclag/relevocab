import React from 'react';
import { DeckWrapper } from './Deck.styles.js';

const Deck = ({ deck, img, recommended }) => {
  return (
    <DeckWrapper>
      <img src={img} className="deck-image" alt="Deck"></img>
      <div className="deck-info">
        <div className="deck-title">{deck.name}</div>
        <div className="deck-cards">{deck.num_cards} cards</div>
        <div className="deck-buttons">
          <button className="practice">
            {recommended ? 'Add Deck' : 'Practice'}
          </button>
          <button className="details">Details</button>
        </div>
      </div>
    </DeckWrapper>
  );
};

export default Deck;
