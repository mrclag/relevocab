import React from 'react';
import styled from 'styled-components';

const Deck = () => {
  return (
    <DeckWrapper>
      <div className="deck-title"></div>
      <div className="deck-cards-table"></div>
    </DeckWrapper>
  );
};

export default Deck;

const DeckWrapper = styled.div`
  margin-left: 400px;
  margin-top: 15vh;
`;
