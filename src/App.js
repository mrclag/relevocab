import React, { useState } from 'react';

import Sidebar from './components/sidebar/Sidebar';
import StudyCards from './components/pages/StudyCards';
import WikiPage from './components/pages/WikiPage';
import WordPage from './components/pages/WordPage';

import LoginPage from './components/pages/LoginPage';
import Header from './components/Header';

import { GlobalStyle } from './styles/global-styles';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const App = ({ auth }) => {
  const [deck, setDeck] = useState({ value: 'words' });

  return (
    <Router>
      <GlobalStyle />

      {auth.uid ? (
        <>
          <Sidebar deck={deck} setDeck={setDeck} />

          <Header />

          <Switch>
            <Route exact path="/" render={() => <StudyCards deck={deck} />} />
            <Route path="/wiki" render={() => <WikiPage deck={deck} />} />
            <Route path="/words" render={() => <WordPage deck={deck} />} />
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
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(App);
