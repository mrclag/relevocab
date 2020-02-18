import React from 'react';

// import firebase from '../firebase';
import { DeleteButton } from '../styles/sidebar/VocabList.styles';

import { connect } from 'react-redux';
import { deleteCard } from '../store/actions/deckActions';

import styled from 'styled-components';

const CardListItemNew = ({ deck, card, deleteCard }) => {
  return (
    <CardListItemWrapper>
      <div className="cardlistitem">{card.front}</div>
      <div className="cardlistitem">{card.back} </div>
      <div className="deletebutton" onClick={() => deleteCard(card.id)}>
        X
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
  width: 100%;
  height: 100%;
  .cardlistitem {
    border: 1px solid #eee;
    width: 30vw;
    @media screen and (max-width: 800px) {
      width: 45vw;
    }
  }
  .deletebutton {
    border: 1px solid #eee
    width: 50px;
    background: pink;
    cursor: pointer;
    @media screen and (max-width: 800px){
      width: 10vw;
    }
  }
`;
