import React, { useState } from 'react';

// Components
import NewCard from './NewCard';
import VocabList from './VocabList';
import AddDeck from './AddDeck';
import NavLink from './NavLink';
import Deck from '../Deck';

// Styles
import {
  SideBarWrapper,
  Title,
  NavLinks,
  DeckWrapper
} from '../../styles/sidebar/Sidebar.styles';

const Sidebar = ({ deck, setDeck, addDeck, options }) => {
  console.log('Render sidebar');

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <SideBarWrapper>
      <AddDeck isOpen={modalOpen} toggle={setModalOpen} addDeck={addDeck} />
      <Title>RELEVOCAB</Title>
      <hr />
      <NavLinks>
        <NavLink value="HOME" className="link" to="/" />
        <NavLink value="FIND WORDS" className="link" to="/wiki" />
        <NavLink value="ABOUT" className="link" to="/words" />
      </NavLinks>
      <hr />
      <DeckWrapper>
        <div className="deck-header">
          <h4>DECKS</h4>
          <button onClick={() => setModalOpen(true)}>
            <div className="add">Add Deck</div>
          </button>
        </div>
        <div className="deck-items">
          <div>
            {options.map((option, i) => (
              <div
                style={{ cursor: 'pointer' }}
                key={i}
                onClick={() => setDeck(option)}
              >
                <Deck
                  deck={deck.value}
                  option={option.value}
                  key={i}
                  onClick={() => setDeck(option)}
                />
              </div>
            ))}
          </div>
        </div>
      </DeckWrapper>
      <hr />
      <VocabList deck={deck} />
      <hr />
      <NewCard deck={deck} />
    </SideBarWrapper>
  );
};

export default React.memo(Sidebar);
