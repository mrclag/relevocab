import React from 'react';
import deckImg from '../images/search_b.png';
import { Link } from 'react-router-dom';
import { deleteDeck } from '../store/actions/deckActions';

import { connect } from 'react-redux';

const DeckInfoBar = ({ currentDeck, deleteDeck }) => {
  return (
    <>
      <div className="top-left">
        <img src={deckImg} alt="" className="deck-picture" />
        <div className="deck-info">
          <div className="deck-info-title">{currentDeck.title}</div>
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

const mapDispatchToProps = dispatch => {
  return {
    deleteDeck: deckId => dispatch(deleteDeck(deckId))
  };
};

export default connect(null, mapDispatchToProps)(React.memo(DeckInfoBar));
