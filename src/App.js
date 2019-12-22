import React, { useState } from 'react';

import Sidebar from './components/sidebar/Sidebar';
import StudyCards from './components/pages/StudyCards';
import WikiPage from './components/pages/WikiPage';
import WordPage from './components/pages/WordPage';

import { GlobalStyle } from './styles/global-styles';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
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
      <Sidebar
        deck={deck}
        setDeck={setDeck}
        options={options}
        addDeck={addDeck}
      />
      <Switch>
        <Route exact path="/" render={() => <StudyCards deck={deck} />} />
        <Route path="/wiki" render={() => <WikiPage deck={deck} />} />
        <Route path="/words" render={() => <WordPage deck={deck} />} />
      </Switch>
    </Router>
  );
};

export default App;
