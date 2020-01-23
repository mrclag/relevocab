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

      <div className="cards-list-wrapper">
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
  return {
    currentCards: state.deck.currentCards
  };
};

export default connect(mapStateToProps)(React.memo(VocabList));
