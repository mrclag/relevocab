import React from 'react';

import Sidebar from './components/layout/Sidebar';
import StudyCards from './components/layout/StudyCards';
import Search from './components/layout/Search';

import styled from 'styled-components';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  console.log('rerender main');

  const deck = 'words';

  return (
    <Router>
      <GlobalStyles>
        <Sidebar />
        <Switch>
          <Route exact path="/" render={() => <StudyCards deck={deck} />} />
          <Route path="/search" render={() => <Search />} />
          <Route path="/search" render={() => <Search />} />
        </Switch>
      </GlobalStyles>
    </Router>
  );
};

export default App;

const GlobalStyles = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin: 0;
`;
