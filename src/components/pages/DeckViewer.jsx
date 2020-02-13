import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CardListItemNew from '../CardListItemNew';

const DeckView = ({ deck, currentCards }) => {
  console.log('deck', deck);
  return (
    <DeckViewWrapper>
      <div className="cards-title">
        {deck.title ? 'Cards in ' + "'" + deck.title + "'" : 'Choose a Deck'}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h5 style={{ width: '250px' }}>Front</h5>
        <h5>Back</h5>
      </div>

      <div>
        {currentCards &&
          currentCards.map((card, i) => (
            <div key={i}>
              <CardListItemNew deck={deck} card={card} />
            </div>
          ))}
      </div>
    </DeckViewWrapper>
  );
};

const mapStateToProps = state => {
  return {
    currentCards: state.deck.currentCards
  };
};

export default connect(mapStateToProps)(React.memo(DeckView));

const DeckViewWrapper = styled.div`
  margin-left: 350px;
  width: 800px
  margin-top: 100px;
  .cards-title {
    font-size: 1.5em;
    font-weight: bold
  }
`;
