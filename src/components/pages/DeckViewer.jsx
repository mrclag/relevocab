import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteDeck } from '../../store/actions/deckActions';

import CardListItemNew from '../CardListItemNew';
import AddNewCard from '../AddNewCard';

const DeckView = ({ currentCards, currentDeck, deleteDeck }) => {
  const existsSelectedDeck = currentDeck.title;



  return (
    <DeckViewWrapper>
      <div className="cards-title">
        {existsSelectedDeck ? (
          <>
            <div>{currentDeck.title}</div>
            <div>
              <button className="button button-practice">
                <Link to="/practice" style={{ textDecoration: 'none' }}>
                  Practice
                </Link>
              </button>
              <button
                onClick={() => deleteDeck(currentDeck.deckId)}
                className="button button-delete"
              >
                Remove
              </button>
            </div>
          </>
        ) : (
          'Choose a Deck'
        )}
      </div>
      {existsSelectedDeck ? (
        <>
          <div className="cards-row-headers">
            <h5>Front</h5>
            <h5>Back</h5>
          </div>

          <div className="cards-list">
            {currentCards &&
              currentCards.map((card, i) => (
                <div key={i}>
                  <CardListItemNew deck={currentDeck} card={card} />
                </div>
              ))}
            <div>
              <AddNewCard />
            </div>
          </div>
        </>
      ) : (
        ''
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
  margin-left: 350px;
  width: 60vw
  margin-top: 100px;
  overflow: hidden;
  .button{
    font-size: 0.8em;
    width: 100px;
    margin-right: 10px;
    &-delete {
      background: pink;
    }
    &-practice {
      background: #8de4af;
    }
  }
  .cards-title {
    font-size: 1.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold
  }
  .cards-row-headers {
    display: flex;
    flex-direction: row;
    h5 {
      width: 30vw;
    }
  }

  .cards-list{
    max-height: 70vh; 
    overflow-y: scroll;
    overflow-x: hide;
    width: 100%;
    padding-right: 10px;
    box-sizing: content-box;
  }
  @media screen and (max-width: 800px){
    margin-left: 0px
    margin-top: 120px;
    width: 100%;
    .cards-title {
      margin-left: 5vw;
    }
    .cards-row-headers {
      margin-left: 5vw;
    }
    .button{
      
    margin-right: 10px;
    }
  }
`;
