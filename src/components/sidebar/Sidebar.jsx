import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useOnClickOutside from '../../utils/useOnClickOutside';

// Components
import NavLink from './NavLink';
import Deck from '../Deck';
import AddDeckInput from './AddDeckInput';

// Icons
import hamburger from '../../images/menu_b.png';
import home_b from '../../images/home_b.png';
import home_w from '../../images/home_w.png';
import search_b from '../../images/search_b.png';
import search_w from '../../images/search_w.png';
import about_b from '../../images/about_b.png';
import about_w from '../../images/about_w.png';
import lyrics_b from '../../images/lyrics_b.png';
import lyrics_w from '../../images/lyrics_w.png';

// Styles
import {
  SideBarWrapper,
  NavLinks,
  DeckWrapper,
  Hamburger,
  SidebarTopWrapper
} from '../../styles/sidebar/Sidebar.styles';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { setCurrentDeck } from '../../store/actions/deckActions';
import { toggleSidebar } from '../../store/actions/appActions';
import { hideSidebar } from '../../store/actions/appActions';

const Sidebar = ({
  setCurrentDeck,
  currentDeck,
  decks,
  auth,
  initDeck,
  toggleSidebar,
  sidebarVisibility,
  hideSidebar
}) => {
  let decksArray;

  if (decks) {
    decksArray = Object.keys(decks).map(key => decks[key]);
  } else {
    decksArray = initDeck;
  }

  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (window.innerWidth <= 800 && sidebarVisibility === true) {
      hideSidebar();
    }
  });

  return (
    <SidebarTopWrapper sidebarVis={sidebarVisibility} ref={ref}>
      <Hamburger>
        <img
          src={hamburger}
          alt="menu"
          onClick={() => toggleSidebar(sidebarVisibility)}
        />
      </Hamburger>
      <SideBarWrapper sidebarVis={sidebarVisibility}>
        <NavLinks>
          <NavLink
            value="Home"
            className="link"
            to="/"
            icon={[home_b, home_w]}
          />
          <NavLink
            value="Find Words"
            className="link"
            to="/wiki"
            icon={[search_b, search_w]}
          />
          <NavLink
            value="About"
            className="link"
            to="/about"
            icon={[about_b, about_w]}
          />
          <NavLink
            value="Songs"
            className="link"
            to="/songs"
            icon={[lyrics_b, lyrics_w]}
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
                decksArray.map(
                  (option, i) =>
                    option && (
                      <Link
                        className="deck-item"
                        key={i}
                        onClick={() => setCurrentDeck(option)}
                        to="/deck"
                      >
                        <Deck deck={currentDeck} option={option} />
                      </Link>
                    )
                )}
            </div>
          </div>
          <AddDeckInput />
        </DeckWrapper>
      </SideBarWrapper>
    </SidebarTopWrapper>
  );
};

const mapStateToProps = state => {
  return {
    decks: state.firestore.data.decks,
    currentDeck: state.deck.currentDeck,
    auth: state.firebase.auth,
    initDeck: state.deck.initDeck,
    sidebarVisibility: state.app.sidebarVisibility
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentDeck: deckName => dispatch(setCurrentDeck(deckName)),
    toggleSidebar: sidebarVisibility =>
      dispatch(toggleSidebar(sidebarVisibility)),
    hideSidebar: () => dispatch(hideSidebar())
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
