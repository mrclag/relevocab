import React, { useState } from 'react';

import Sidebar from './components/layout/Sidebar';
import StudyCards from './components/layout/StudyCards';
import WikiPage from './components/pages/WikiPage';
import WordPage from './components/pages/WordPage';
import LyricsPage from './components/pages/LyricsPage';

import { GlobalStyle } from './styles/global-styles';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  console.log('rerender main');

  const [deck, setDeck] = useState({ value: 'words', label: 'words' });

  const options = [
    { value: 'words', label: 'words' },
    { value: 'deck1', label: 'deck1' },
    { value: 'deck2', label: 'deck2' }
  ];

  return (
    <Router>
      <GlobalStyle />
      <Sidebar deck={deck} setDeck={setDeck} options={options} />
      <Switch>
        <Route exact path="/" render={() => <StudyCards deck={deck} />} />
        <Route path="/wiki" render={() => <WikiPage deck={deck} />} />
        <Route path="/words" render={() => <WordPage deck={deck} />} />
        <Route path="/lyrics" render={() => <LyricsPage />} />
      </Switch>
    </Router>
  );
};

export default App;
