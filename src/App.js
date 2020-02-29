import React from 'react';

import Sidebar from './components/sidebar/Sidebar';
import StudyCards from './components/pages/StudyCards';
import WikiPage from './components/pages/WikiPage';
import About from './components/pages/About';
import Header from './components/Header';
import Instructions from './components/pages/Instructions';
import DeckViewer from './components/pages/DeckViewer';
import LyricsPage from './components/pages/LyricsPage';
import LandingPage from './components/pages/LandingPage';

import { GlobalStyle } from './styles/global-styles';

import styled from 'styled-components';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const App = ({ auth, currentDeck }) => {
  return (
    <Router>
      <GlobalStyle />

      {auth.uid ? (
        <AppWrapper>
          <Header />
          <div className="main-content">
            <Sidebar />
            <Switch>
              <Route exact path="/" render={() => <Instructions />} />
              <Route path="/practice" render={() => <StudyCards />} />
              <Route path="/wiki" render={() => <WikiPage />} />
              <Route path="/about" render={() => <About />} />
              <Route path="/deck" render={() => <DeckViewer />} />
              <Route path="/songs" render={() => <LyricsPage />} />
            </Switch>
          </div>
        </AppWrapper>
      ) : (
        <LandingPage />
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

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .main-content {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
  }
`;
