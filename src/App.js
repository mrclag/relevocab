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
  console.log('auth: ', auth);
  console.log('Render APP');

  const [deck, setDeck] = useState({ value: 'words', label: 'words' });

  const addDeck = name => {
    if (name in Object.keys(options)) {
      alert('Deck already exists');
    } else {
      options.push({ value: name, label: name });
    }
    console.log(options);
  };

  const options = [
    { value: 'words', label: 'words' },
    { value: 'deck1', label: 'deck1' },
    { value: 'deck2', label: 'deck2' }
  ];

  return (
    <Router>
      <GlobalStyle />

      {auth.uid ? (
        <>
          <Sidebar
            deck={deck}
            setDeck={setDeck}
            options={options}
            addDeck={addDeck}
          />
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
