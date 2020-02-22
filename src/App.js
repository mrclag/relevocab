import React from 'react';

import Sidebar from './components/sidebar/Sidebar';
import StudyCards from './components/pages/StudyCards';
import WikiPage from './components/pages/WikiPage';
import About from './components/pages/About';
import LoginPage from './components/pages/LoginPage';
import Header from './components/Header';
import Instructions from './components/pages/Instructions';
import DeckViewer from './components/pages/DeckViewer';
import LyricsPage from './components/pages/LyricsPage';

import { GlobalStyle } from './styles/global-styles';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const App = ({ auth, currentDeck }) => {
  return (
    <Router>
      <GlobalStyle />

      {auth.uid ? (
        <>
          <Sidebar />
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Instructions />} />
            <Route path="/practice" render={() => <StudyCards />} />
            <Route path="/wiki" render={() => <WikiPage />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/deck" render={() => <DeckViewer />} />
            <Route path="/songs" render={() => <LyricsPage />} />
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
