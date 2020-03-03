import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { deleteDeck } from '../../store/actions/deckActions';

import CardListItemNew from '../CardListItemNew';
import AddNewCard from '../AddNewCard';
import Dropdown from '../Dropdown';
import DeckInfoBar from '../DeckInfoBar';

const DeckView = ({ currentCards, currentDeck, deleteDeck }) => {
  const existsSelectedDeck = currentDeck.title;

  const [lang, setLang] = useState('');

  return (
    <DeckViewWrapper>
      {existsSelectedDeck ? (
        <div className="deck-page">
          <div className="top">
            <DeckInfoBar currentDeck={currentDeck} />
          </div>
          <div className="main-content">
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
          </div>
          <div className="right-bar">
            <DeckInfoBar currentDeck={currentDeck} />
          </div>
        </div>
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


const DeckViewWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  .deck-page {
    display: flex;
    flex-direction: row;
    height: 100%;
    @media screen and (max-width: 800px){
      flex-direction: column;
    }
    .right-bar{
      width: 300px;
      min-width: 300px !important;
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 50px;
      
    }
    .main-content {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;

      .language-selects{
        display: flex;
        flex-direction: row;
        > * {
          width: calc(50% - 30px);
        }
      }

      .cards-list{
        max-height: 80vh;
        overflow-y: scroll;
        overflow-x: hide;
      }
    }

    .top {
    display: none;
      flex-direction: row;
      height: 100px;
      border-bottom: 0.5px solid #333;
      margin-bottom: 10px;
      text-align: center;
      padding: 40px 100px;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: 800px) {
        padding: 10px 25px;
        display: flex;
      }
    }

    .deck-picture {
        width: 50px;
        height: 50px;
      }
      .deck-info {
        display: flex;
        margin-bottom: 20px;

        &-title {
          font-size: 30px;
        font-weight: bold;

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
