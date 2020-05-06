import React from 'react';
import { DeckListWrapper } from './DeckList.styles.js';
import Deck from './Deck.jsx';

const DeckList = () => {
  return (
    <DeckListWrapper className="container wrapper">
      <div className="left-bar">
        <div className="collections-title">Collections</div>
        {collections.map((collection) => (
          <div className="collection">{collection.name}</div>
        ))}
      </div>
      <div className="right-bar">
        <div className="add-deck">
          <img
            src="https://via.placeholder.com/150"
            className="image-upload"
          ></img>
          <input
            type="text"
            placeholder="Deck Name"
            className="deck-name-input"
          />
          <button className="upload-button">Upload</button>
        </div>
        <div className="recommended-title">Recommended</div>
        <div className="recommendations">
          {recommendations.map((rec, i) => (
            <Deck
              deck={rec}
              recommended={true}
              img={`https://picsum.photos/id/${230 + i}/200/300`}
            />
          ))}
        </div>
      </div>
      <div className="middle">
        <div className="decks-title">Decks</div>
        {decks.map((deck, i) => (
          // <div className="deck">{deck.name}</div>

          <Deck
            deck={deck}
            img={`https://picsum.photos/id/${230 + i}/200/300`}
          />
        ))}
      </div>
    </DeckListWrapper>
  );
};

export default DeckList;

const collections = [
  { name: 'Bad Bunny' },
  { name: 'Shakira' },
  { name: 'Money Heist' },
];

const decks = [
  {
    name: 'Bad Bunny - Vete',
    cards: '35',
    img: 'https://picsum.photos/200/300',
  },
  {
    name: 'Shakira - Chantaje',
    cards: '39',
    img: 'https://picsum.photos/200/300',
  },
  {
    name: 'Shakira - Me Gusta',
    cards: '28',
    img: 'https://picsum.photos/200/300',
  },
  {
    name: 'Shakira - Bicicleta',
    cards: '35',
    img: 'https://picsum.photos/200/300',
  },
  {
    name: `Shakira - Hips Don't Lie`,
    cards: '31',
    img: 'https://picsum.photos/200/300',
  },
];

const recommendations = [
  {
    name: 'Bad Bunny - P FKN R',
    cards: '35',
    img: 'https://picsum.photos/200/300',
  },
  { name: 'Shakira - Nada', cards: '39', img: 'https://picsum.photos/200/300' },
  {
    name: 'Shakira - Amarillo',
    cards: '28',
    img: 'https://picsum.photos/200/300',
  },
  {
    name: 'Shakira - Deja Vu',
    cards: '35',
    img: 'https://picsum.photos/200/300',
  },
  {
    name: `Shakira - What We Said`,
    cards: '31',
    img: 'https://picsum.photos/200/300',
  },
];
