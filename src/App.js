import React from 'react';

import Sidebar from './components/sidebar/Sidebar';
import StudyCards from './components/pages/studyCards/StudyCards';
import FindWordsPage from './components/pages/findWords/FindWordsPage';
import About from './components/pages/about/About.jsx';
import Instructions from './components/pages/homePage/Instructions';
import DeckViewer from './components/pages/deckViewer/DeckViewer';
import DeckView from './components/pages/deckView/DeckView';
import LyricsPage from './components/pages/songs/LyricsPage';
import LandingPage from './components/landing/LandingPage';
import UploadSongPage from './components/pages/uploadSong/UploadSongPage';

import { GlobalStyle } from './global-styles';

import styled from 'styled-components';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/header/Header.jsx';

const App = ({ auth, currentDeck }) => {
  return (
    <Router>
      <GlobalStyle />

      {auth.uid ? (
        <AppWrapper>
          <Header />
          <DeckView />
          {/* <div className="main-content">
            <Sidebar />
            <Switch>
              <Route exact path="/" render={() => <Instructions />} />
              <Route path="/practice" render={() => <StudyCards />} />
              <Route path="/wiki" render={() => <FindWordsPage />} />
              <Route path="/about" render={() => <About />} />
              <Route path="/deck" render={() => <DeckViewer />} />
              <Route path="/songs" render={() => <LyricsPage />} />
              <Route path="/uploadsong" render={() => <UploadSongPage />} />
            </Switch>
          </div> */}
        </AppWrapper>
      ) : (
        <LandingPage />
      )}
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    currentDeck: state.deck.currentDeck,
  };
};

export default connect(mapStateToProps)(App);

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #eee;
  .main-content {
    position: relative;
    display: flex;
    flex-direction: row;
  }
`;
