import React from 'react';
import { DeckViewWrapper } from './DeckView.styles.js';
import { decks } from '../deckList/data.js';

import { Container } from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

const deck = decks[0];

const DeckView = () => {
  return (
    <Container disableGutters={true}>
      <DeckViewWrapper>
        <div className="left">
          <div className="deck-info">
            <img src={deck.img} className="deck-image" alt="Deck"></img>
            <div className="deck-description">
              <div className="deck-title">{deck.name}</div>
              <div className="deck-cards">{deck.num_cards} cards</div>
            </div>
            <div className="button-practice"></div>
          </div>
          <div className="cards-wrapper">
            {deck.cards.map((card, i) => (
              <div key={i} className="card">
                <div className="card-front">{card.front}</div>
                <div className="card-back">{card.back}</div>
                <div className="card-details">
                  <DeleteOutlined style={{ color: 'darkred' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right"></div>
      </DeckViewWrapper>
    </Container>
  );
};

export default DeckView;
