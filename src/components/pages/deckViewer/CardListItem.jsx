import React from 'react';

import { connect } from 'react-redux';
import { deleteCard } from '../../../store/actions/deckActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { CardListItemWrapper } from './CardListItem.styles';

const CardListItem = ({ deck, card, deleteCard }) => {
  return (
    <CardListItemWrapper>
      <div className="cardlistitem front">{card.front}</div>
      <div className="cardlistitem back">{card.back} </div>
      <div className="deletebutton" onClick={() => deleteCard(card.id)}>
        <FontAwesomeIcon icon={faTrashAlt} className="trash" color="#C44536" />
      </div>
    </CardListItemWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: cardId => dispatch(deleteCard(cardId))
  };
};

export default connect(null, mapDispatchToProps)(React.memo(CardListItem));
