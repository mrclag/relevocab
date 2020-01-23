import React, { useState } from 'react';

// import firebase from '../firebase';
import { DeleteButton } from '../styles/sidebar/VocabList.styles';

import { connect } from 'react-redux';
import { deleteCard } from '../store/actions/deckActions';

const CardListItem = ({ deck, card, deleteCard }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div>
      <span
        className="card-list-item-front"
        style={{
          color: hovered ? '#107bbd' : 'black'
        }}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        {card.front}{' '}
      </span>
      <span className={hovered ? '' : 'hide'}>{card.back} </span>
      <DeleteButton onClick={() => deleteCard(card.id)}>X</DeleteButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: cardId => dispatch(deleteCard(cardId))
  };
};

export default connect(null, mapDispatchToProps)(React.memo(CardListItem));
