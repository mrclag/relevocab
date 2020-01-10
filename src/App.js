import React, { useState } from 'react';

import Sidebar from './components/sidebar/Sidebar';
import StudyCards from './components/pages/StudyCards';
import WikiPage from './components/pages/WikiPage';
import WordPage from './components/pages/WordPage';
import About from './components/pages/About';
import LoginPage from './components/pages/LoginPage';
import Header from './components/Header';
import Instructions from './components/pages/Instructions';

import { GlobalStyle } from './styles/global-styles';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const App = ({ auth, currentDeck }) => {
  const [deck, setDeck] = useState({ value: 'words' });

  return (
    <Router>
      <GlobalStyle />

      {auth.uid ? (
        <>
          <Sidebar deck={deck} setDeck={setDeck} />

          <Header />

          <Switch>
            {currentDeck.title ? (
              <Route exact path="/" render={() => <StudyCards deck={deck} />} />
            ) : (
              <Route exact path="/" render={() => <Instructions />} />
            )}
            <Route path="/wiki" render={() => <WikiPage deck={deck} />} />
            <Route path="/words" render={() => <About />} />
          </Switch>
        </>
      ) : (
        <LoginPage />
      )}
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    currentDeck: state.deck.currentDeck
  };
};

export default connect(mapStateToProps)(App);
