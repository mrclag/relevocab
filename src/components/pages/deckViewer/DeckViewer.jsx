import React, { useState } from 'react';
import { connect } from 'react-redux';

import { deleteDeck } from '../../../store/actions/deckActions';
import { DeckViewWrapper } from './DeckViewer.styles';

import CardListItem from './CardListItem';
import AddNewCard from './AddNewCard';
import Dropdown from '../../dropdown/Dropdown';
import DeckInfoBar from './DeckInfoBar';

export const DeckView = ({ currentCards, currentDeck, deleteDeck }) => {
  const existsSelectedDeck = currentDeck && currentDeck.title;
  const [lang, setLang] = useState('');

  return (
    <DeckViewWrapper>
      {existsSelectedDeck ? (
        <div className="deck-page">
          <div className="top">
            <DeckInfoBar />
          </div>
          <div className="main-content">
            <div className="newcard">
              <div className="language-selects">
                <Dropdown lang={lang} setLang={setLang} />
                <Dropdown lang={lang} setLang={setLang} />
              </div>
              <AddNewCard lang={lang} />
            </div>
            <div className="cards-list">
              {currentCards &&
                currentCards.map((card, i) => (
                  <div key={i}>
                    <CardListItem deck={currentDeck} card={card} />
                  </div>
                ))}
            </div>
          </div>
          <div className="right-bar">
            <DeckInfoBar />
          </div>
        </div>
      ) : (
        <div className="choose-deck">Choose a Deck</div>
      )}
    </DeckViewWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    currentCards: state.deck.currentCards,
    currentDeck: state.deck.currentDeck,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteDeck: (deckId) => dispatch(deleteDeck(deckId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(DeckView));
