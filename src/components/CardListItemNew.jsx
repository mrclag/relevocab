import React, { useState } from 'react';

// import firebase from '../firebase';
import { DeleteButton } from '../styles/sidebar/VocabList.styles';

import { connect } from 'react-redux';
import { deleteCard } from '../store/actions/deckActions';

const CardListItemNew = ({ deck, card, deleteCard }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        margin: '0px',
        height: '50px',
        textAlign: 'center',
        lineHeight: '50px',
        verticalAlign: 'middle'
      }}
    >
      <div
        style={{
          border: '1px solid #eee',
          width: '250px'
        }}
      >
        {card.front}
      </div>
      <div
        style={{
          border: '1px solid #eee',
          width: '250px'
        }}
      >
        {card.back}{' '}
      </div>
      <DeleteButton onClick={() => deleteCard(card.id)}>X</DeleteButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: cardId => dispatch(deleteCard(cardId))
  };
};

export default connect(null, mapDispatchToProps)(React.memo(CardListItemNew));
