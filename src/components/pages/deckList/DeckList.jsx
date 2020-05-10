import React from 'react';
import { DeckListWrapper } from './DeckList.styles.js';
import Deck from './Deck.jsx';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { setCurrentDeck } from '../../../store/actions/deckActions';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

import { collections, decks, recommendations } from './data.js';

const DeckList = () => {
  return (
    <Container>
      <DeckListWrapper className="wrapper">
        <div className="left-bar">
          <div className="collections-title">Collections</div>
          {collections.map((collection) => (
            <div className="collection">{collection.name}</div>
          ))}
        </div>
        <div className="right-bar">
          <div className="add-deck">
            <img
              src="https://via.placeholder.com/150"
              className="image-upload"
              alt="Upload"
            ></img>
            <input
              type="text"
              placeholder="Deck Name"
              className="deck-name-input"
            />
            <button className="upload-button">Upload</button>
          </div>
          <div className="recommended-title">Recommended</div>
          <div className="recommendations">
            {recommendations.map((rec, i) => (
              <Link key={i} onClick={() => setCurrentDeck(rec)} to="/deck">
                <Deck
                  deck={rec}
                  recommended={true}
                  img={`https://picsum.photos/id/${230 + i}/200/300`}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="middle">
          <div className="decks-title">Decks</div>
          {decks.map((deck, i) => (
            // <div className="deck">{deck.name}</div>
            <Link key={i} onClick={() => setCurrentDeck(deck)} to="/deck">
              <Deck
                deck={deck}
                img={`https://picsum.photos/id/${230 + i}/200/300`}
              />
            </Link>
          ))}
        </div>
      </DeckListWrapper>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    decks: state.firestore.data.decks,
    currentDeck: state.deck.currentDeck,
    auth: state.firebase.auth,
    sidebarVisibility: state.app.sidebarVisibility,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentDeck: (deckName) => dispatch(setCurrentDeck(deckName)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: 'decks',
        where: [['authorId', '==', props.auth.uid || 'test']],
      },
    ];
  })
)(React.memo(DeckList));
