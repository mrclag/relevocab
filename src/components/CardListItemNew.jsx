import React from 'react';

// import firebase from '../firebase';

import { connect } from 'react-redux';
import { deleteCard } from '../store/actions/deckActions';

import styled from 'styled-components';
import trash from '../images/trash.png';

const CardListItemNew = ({ deck, card, deleteCard }) => {
  return (
    <CardListItemWrapper>
      <div className="cardlistitem">{card.front}</div>
      <div className="cardlistitem">{card.back} </div>
      <div className="deletebutton" onClick={() => deleteCard(card.id)}>
        <img className="trash" src={trash} alt="" />
      </div>
    </CardListItemWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: cardId => dispatch(deleteCard(cardId))
  };
};

export default connect(null, mapDispatchToProps)(React.memo(CardListItemNew));

const CardListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  vertical-align: middle;

  .cardlistitem {
    border: 1px solid #eee;
    width: 50%;
    @media screen and (max-width: 800px) {
      width: 50%;
    }
  }
  .deletebutton {
    border: none;
    width: 50px;
    background: pink;
    cursor: pointer;
    .trash {
      width: 20px;
      height: 20px;
      transform: translateY(5px);
    }
    @media screen and (max-width: 800px) {
      width: 10%;
    }
  }
`;
