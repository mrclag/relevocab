import React, { useState, useEffect } from 'react';

// import Card from './components/Card';
// import DrawButton from './components/DrawButton';
import Sidebar from './components/layout/Sidebar';
import StudyCards from './components/layout/StudyCards';
import Search from './components/layout/Search';

import styled from 'styled-components';
import firebase from './firebase';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [cards, setCards] = useState([
    {
      eng: 'set a card',
      foreign: 'set a card'
    }
  ]);
  const [currentCard, setCurrentCard] = useState({});

  useEffect(() => {
    firebase
      .firestore()
      .collection('words')
      .orderBy('foreign', 'desc')
      .onSnapshot(snapshot => {
        const newVocab = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCards(newVocab);
        console.log('rerender main');
      });
    setCurrentCard(getRandomCard(cards));
  }, []);

  const getRandomCard = currentCards => {
    let card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  };

  const updateCard = () => {
    setCurrentCard(getRandomCard(cards));
  };

  console.log(currentCard);
  return (
    <Router>
      <GlobalStyles>
        <Sidebar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <StudyCards
                eng={currentCard.eng}
                foreign={currentCard.foreign}
                drawCard={updateCard}
              />
            )}
          />
          <Route path="/search" render={() => <Search />} />
        </Switch>
        {/* <ContentWrapper>
        <Card eng={currentCard.eng} foreign={currentCard.foreign} />
        <DrawButton drawCard={updateCard} />
      </ContentWrapper> */}
      </GlobalStyles>
    </Router>
  );
};

export default App;

const GlobalStyles = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin: 0;
`;
