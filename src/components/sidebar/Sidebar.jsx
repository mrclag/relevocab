import React, { useState } from 'react';

// Components
import NewCard from './NewCard';
import VocabList from './VocabList';
import AddDeck from './AddDeck';
import NavLink from './NavLink';
import Deck from '../Deck';

// Styles
import {
  SideBarWrapper,
  Title,
  NavLinks,
  DeckWrapper
} from '../../styles/sidebar/Sidebar.styles';

import { connect } from 'react-redux';

import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { setCurrentDeck } from '../../store/actions/deckActions';

const Sidebar = ({ setCurrentDeck, currentDeck, options, decks }) => {
  console.log('Render sidebar');

  console.log('current deck: ', currentDeck);

  let decksArray;
  if (decks) {
    decksArray = Object.keys(decks).map(key => decks[key]);
  }

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <SideBarWrapper>
      <AddDeck isOpen={modalOpen} toggle={setModalOpen} />
      <Title>RELEVOCAB</Title>
      <hr />
      <NavLinks>
        <NavLink value="HOME" className="link" to="/" />
        <NavLink value="FIND WORDS" className="link" to="/wiki" />
        <NavLink value="ABOUT" className="link" to="/words" />
      </NavLinks>
      <hr />
      <DeckWrapper>
        <div className="deck-header">
          <h4>DECKS</h4>
          <button onClick={() => setModalOpen(true)}>
            <div className="add">Add Deck</div>
          </button>
        </div>
        <div className="deck-items">
          <div>
            {decksArray &&
              decksArray.map((option, i) => (
                <div
                  style={{ cursor: 'pointer' }}
                  key={i}
                  onClick={() => setCurrentDeck(option)}
                >
                  <Deck deck={currentDeck} option={option} />
                </div>
              ))}
          </div>
        </div>
      </DeckWrapper>
      <hr />
      <VocabList deck={currentDeck} />
      <hr />
      <NewCard deck={currentDeck} />
    </SideBarWrapper>
  );
};

const mapStateToProps = state => {
  console.log('state: ', state);
  return {
    decks: state.firestore.data.decks,
    currentDeck: state.deck.currentDeck
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentDeck: deckName => dispatch(setCurrentDeck(deckName))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'decks' }])
)(React.memo(Sidebar));
