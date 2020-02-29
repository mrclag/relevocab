import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteDeck } from '../../store/actions/deckActions';

import CardListItemNew from '../CardListItemNew';
import AddNewCard from '../AddNewCard';
import Dropdown from '../Dropdown';

import deckImg from '../../images/search_b.png';

const DeckView = ({ currentCards, currentDeck, deleteDeck }) => {
  const existsSelectedDeck = currentDeck.title;

  const [lang, setLang] = useState('');

  return (
    <DeckViewWrapper>
      {existsSelectedDeck ? (
        <>
          <Top>
            <div className="top-left">
              <img src={deckImg} alt="" className="deck-picture" />
              <div className="deck-info">
                <div className="deck-info-title">{currentDeck.title}</div>
                <div className="deck-info-cards">
                  {currentCards.length} cards in deck.
                </div>
              </div>
            </div>
            <div className="deck-buttons">
              <Link to="/practice">
                <button className="button button-practice">Practice</button>
              </Link>
              <button
                onClick={() => deleteDeck(currentDeck.deckId)}
                className="button button-delete"
              >
                Remove
              </button>
            </div>
          </Top>
          <div className="language-selects">
            <Dropdown lang={lang} setLang={setLang} />
            <Dropdown lang={lang} setLang={setLang} />
          </div>
          <AddNewCard lang={lang} />
          <div className="cards-list">
            {currentCards &&
              currentCards.map((card, i) => (
                <div key={i}>
                  <CardListItemNew deck={currentDeck} card={card} />
                </div>
              ))}
          </div>
        </>
      ) : (
        <div className="choose-deck">Choose a Deck</div>
      )}
    </DeckViewWrapper>
  );
};

const mapStateToProps = state => {
  return {
    currentCards: state.deck.currentCards,
    currentDeck: state.deck.currentDeck
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteDeck: deckId => dispatch(deleteDeck(deckId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(DeckView));

const Top = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  border-bottom: 0.5px solid #333;
  margin-bottom: 10px;
  padding: 40px 100px;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px){
    padding: 10px 25px;
  }

  .top-left{
    display: flex;
    flex-direction: row;
    
    .deck-picture {
      width: 70px;
      height: 70px;
    }
    .deck-info {
      margin-left: 20px;
      flex-direction: column;

      &-title {
        font-size: 30px;
      font-weight: bold;

      }
    }
  }
  
  .deck-buttons {
    display: flex;
    flex-direction: column
    margin: 5px;

    .button {
      font-size: 20px;
      width: 180px;
      height: 50px;
      margin-right: 10px;
      border: none;
      @media screen and (max-width: 800px){
        width: 120px;
        height: 35px;
      }
      &-practice {
        background: #8de4af;
        margin-bottom: 10px;
      }
      &-delete {
        background: pink;
      }
    }
  }

`;

const DeckViewWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  .language-selects{
    display: flex;
    flex-direction: row;

    > * {
      width: calc(50% - 30px);
    }
  }

  .cards-list{
    position: relative;
    max-height: 60vh;
    overflow-y: scroll;
  }
  @media screen and (max-width: 800px){
    margin-left: 0px
    margin-top: 20px;
    width: 100%;
  }

  .choose-deck {
    font-size: 40px;
    margin-left: 50px;
    margin-top: 20px;
  }
`;
