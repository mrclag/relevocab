import React from 'react';

import { connect } from 'react-redux';
import { deleteCard } from '../../../store/actions/deckActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faSlash } from '@fortawesome/free-solid-svg-icons';

import { CardListItemWrapper } from './CardListItem.styles';

export const CardListItem = ({ deck, card, deleteCard }) => {
  const cardlength =
    card && card.back
      ? Math.max(card.front.length, card.back.length)
      : card.front.length;
  const disabled = deck.type && deck.type === 'SONG';

  return (
    <CardListItemWrapper disabled={disabled} cardlength={cardlength}>
      <div className="cardlistitem front">{card && card.front}</div>
      <div className="cardlistitem back">{card && card.back} </div>
      <div className="deletebutton" onClick={() => deleteCard(card.id)}>
        {disabled && (
          <FontAwesomeIcon icon={faSlash} className="disabled" color="gray" />
        )}
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="trash"
          color={disabled ? '#c48a84' : '#C44536'}
        />
      </div>
    </CardListItemWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (cardId) => dispatch(deleteCard(cardId)),
  };
};

export default connect(null, mapDispatchToProps)(React.memo(CardListItem));
