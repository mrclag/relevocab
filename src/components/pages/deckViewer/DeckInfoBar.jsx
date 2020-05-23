import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteDeck } from '../../../store/actions/deckActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

export const DeckInfoBar = ({ currentDeck, deleteDeck, currentCards }) => {
  return (
    <>
      <div className="top-left">
        {/* <img src={file_upload} alt="" className="deck-picture" /> */}
        {currentDeck.imgUrl ? (
          <img src={currentDeck.imgUrl} alt="" className="deck-picture" />
        ) : (
          <FontAwesomeIcon
            icon={faImage}
            className="deck-picture"
            color="#333"
          />
        )}
        <div className="deck-info">
          <div className="deck-info-title">
            {currentDeck && currentDeck.title}
          </div>
          <div>{currentCards && currentCards.length} cards</div>
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
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteDeck: (deckId) => dispatch(deleteDeck(deckId)),
  };
};

const mapStateToProps = (state) => {
  return {
    currentCards: state.deck.currentCards,
    currentDeck: state.deck.currentDeck,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(DeckInfoBar));
