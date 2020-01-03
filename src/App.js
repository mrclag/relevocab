import React, { useState } from 'react';

import Sidebar from './components/sidebar/Sidebar';
import StudyCards from './components/pages/StudyCards';
import WikiPage from './components/pages/WikiPage';
import WordPage from './components/pages/WordPage';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
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
          <div
            style={{
              position: 'absolute',
              top: '0',
              right: '200px'
            }}
          >
            <Header />
          </div>
          <Switch>
            <Route exact path="/" render={() => <StudyCards deck={deck} />} />
            <Route path="/wiki" render={() => <WikiPage deck={deck} />} />
            <Route path="/words" render={() => <WordPage deck={deck} />} />
          </Switch>
        </>
      ) : (
        <>
          <SignIn />
          <SignUp />
        </>
      )}
    </Router>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(App);
