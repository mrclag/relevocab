import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useOnClickOutside from '../../utils/useOnClickOutside';

// Components
import NavLink from './NavLink';
import Deck from './Deck';
import AddDeckInput from './AddDeckInput';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBars,
  faSearch,
  faQuestionCircle,
  faMusic,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

// Styles
import {
  SideBarWrapper,
  NavLinks,
  DeckWrapper,
  Hamburger,
  SidebarTopWrapper
} from './Sidebar.styles';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { setCurrentDeck } from '../../store/actions/deckActions';
import { toggleSidebar } from '../../store/actions/appActions';
import { hideSidebar } from '../../store/actions/appActions';

import { signOut } from '../../store/actions/authActions';
import logo_full from '../../images/vocarta_logo_full.png';

const Sidebar = ({
  setCurrentDeck,
  currentDeck,
  decks,
  auth,
  initDeck,
  toggleSidebar,
  sidebarVisibility,
  hideSidebar,
  signOut
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
        <FontAwesomeIcon
          icon={faBars}
          color="white"
          style={{ fontSize: '26px', marginTop: '8px' }}
          onClick={() => toggleSidebar(sidebarVisibility)}
        />
      </Hamburger>
      <SideBarWrapper sidebarVis={sidebarVisibility}>
        <div className="header">
          <div className="title">
            <img className="logo" src={logo_full} alt="logo" />
            {/* Vocarta */}
          </div>
          {/* <button onClick={signOut}>Logout</button> */}
          <FontAwesomeIcon
            icon={faSignOutAlt}
            color="white"
            onClick={signOut}
            className="signout"
          />
        </div>
        <NavLinks>
          <NavLink
            value="Home"
            className="link"
            to="/"
            icon={[
              <FontAwesomeIcon icon={faHome} color="#2a416f" />,
              <FontAwesomeIcon icon={faHome} color="white" />
            ]}
          />
          <NavLink
            value="Find Words"
            className="link"
            to="/wiki"
            icon={[
              <FontAwesomeIcon icon={faSearch} color="#2a416f" />,
              <FontAwesomeIcon icon={faSearch} color="white" />
            ]}
          />
          <NavLink
            value="About"
            className="link"
            to="/about"
            icon={[
              <FontAwesomeIcon icon={faQuestionCircle} color="#2a416f" />,
              <FontAwesomeIcon icon={faQuestionCircle} color="white" />
            ]}
          />
          {/* <NavLink
            value="Songs"
            className="link"
            to="/songs"
            icon={[
              <FontAwesomeIcon icon={faMusic} color="#2a416f" />,
              <FontAwesomeIcon icon={faMusic} color="white" />
            ]}
          /> */}
        </NavLinks>
        <hr />
        <DeckWrapper>
          <div className="deck-header">
            MY DECKS ({decksArray && decksArray.length})
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
    hideSidebar: () => dispatch(hideSidebar()),
    signOut: () => dispatch(signOut())
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
