import React from 'react';
import { connect } from 'react-redux';

import CardListItem from '../CardListItem';

import { VocabListWrapper } from '../../styles/sidebar/VocabList.styles';

const VocabList = ({ deck, currentCards }) => {
  return (
    <VocabListWrapper>
      <div className="cards-title">
        <h4>CARDS</h4>
      </div>

      <div
        style={{
          marginLeft: '10px',
          height: '45vh',
          overflowY: 'overlay scroll',
          overflowX: 'hidden'
        }}
      >
        {currentCards &&
          currentCards.map((card, i) => (
            <div className="card-list-item" key={i}>
              <CardListItem deck={deck} card={card} />
            </div>
          ))}
      </div>
    </VocabListWrapper>
  );
};

const mapStateToProps = state => {
  console.log(state.deck.currentCards);
  return {
    currentCards: state.deck.currentCards
  };
};

export default connect(mapStateToProps)(React.memo(VocabList));
