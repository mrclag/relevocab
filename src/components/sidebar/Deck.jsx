import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import {DeckWrapper} from './Deck.styles'

const Deck = ({ deck, option, location }) => {
  const selected = deck.deckId ? option.deckId === deck.deckId : false;
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  return (
    <DeckWrapper
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      selected={selected}
      hovered={hovered}
    >
      <span className="deck-list-item">
        <div className="counter">{Object.keys(option.cards).length}</div>
      </span>
      <span>
        <span style={{ marginLeft: '10px', marginBottom: '15px' }}>
          {option.title}
        </span>
      </span>
    </DeckWrapper>
  );
};

export default withRouter(Deck);