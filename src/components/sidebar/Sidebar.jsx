import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import NavLink from './NavLink';
import Deck from '../Deck';
import AddDeckInput from './AddDeckInput';

// Icons
import hamburger from '../../images/menu.png';
import homeIcon from '../../images/homeIcon.png';
import findIcon from '../../images/findWordsIcon.png';
import aboutIcon from '../../images/aboutIcon.png';

// Styles
import {
  SideBarWrapper,
  NavLinks,
  DeckWrapper,
  Hamburger
} from '../../styles/sidebar/Sidebar.styles';

import { connect } from 'react-redux';

import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { setCurrentDeck } from '../../store/actions/deckActions';

const Sidebar = ({
  setCurrentDeck,
  currentDeck,
  options,
  decks,
  auth,
  initDeck
}) => {
  let decksArray;

  const [sidebarVis, setSidebarVis] = useState(true);
  const toggleSidebar = () => setSidebarVis(!sidebarVis);

  useEffect(() => {}, [currentDeck]);

  if (decks) {
    decksArray = Object.keys(decks).map(key => decks[key]);
  } else {
    decksArray = initDeck;
  }

  return (
    <>
      <Hamburger>
        <img src={hamburger} alt="menu" onClick={() => toggleSidebar()} />
      </Hamburger>
      <SideBarWrapper sidebarVis={sidebarVis}>
        <NavLinks>
          <NavLink value="Home" className="link" to="/" icon={homeIcon} />
          <NavLink
            value="Find Words"
            className="link"
            to="/wiki"
            icon={findIcon}
          />
          <NavLink
            value="About"
            className="link"
            to="/about"
            icon={aboutIcon}
          />
        </NavLinks>
        <hr />
        <DeckWrapper>
          <div className="deck-header">
            <h4>DECKS</h4>
          </div>
          <div className="deck-items">
            <div>
              {decksArray &&
                decksArray.map((option, i) => (
                  <Link
                    className="deck-item"
                    key={i}
                    onClick={() => setCurrentDeck(option)}
                    to="/deck"
                  >
                    <Deck deck={currentDeck} option={option} />
                  </Link>
                ))}
            </div>
          </div>
          <AddDeckInput />
        </DeckWrapper>
      </SideBarWrapper>
    </>
  );
};

const mapStateToProps = state => {
  return {
    decks: state.firestore.data.decks,
    currentDeck: state.deck.currentDeck,
    auth: state.firebase.auth,
    initDeck: state.deck.initDeck
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentDeck: deckName => dispatch(setCurrentDeck(deckName))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => {
    return [
      {
        collection: 'decks',
        where: [['authorId', '==', props.auth.uid || 'test']]
      }
    ];
  })
)(React.memo(Sidebar));
