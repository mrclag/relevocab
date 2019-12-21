import React, { useState } from 'react';
import NewCard from '../../components/NewCard';
import VocabList from '../../components/VocabList';
import Select from 'react-select';

import {
  SideBarWrapper,
  Title,
  NavLinks
} from '../../styles/layout/Sidebar.styles';

import { Link } from 'react-router-dom';

const Sidebar = ({ deck, setDeck, options }) => {
  console.log(deck);
  console.log('rerender sidebar');
  return (
    <SideBarWrapper>
      <Title>Relevocab</Title>
      <NavLinks>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/words">
          Words
        </Link>
        <Link className="link" to="/about">
          News
        </Link>
      </NavLinks>
      <hr />
      <div style={{ paddingLeft: '30px' }}>Deck</div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Select
          className="selectMenu"
          value={deck}
          options={options}
          onChange={deck => setDeck(deck)}
        />
        <button style={{ marginLeft: '5px' }}>+</button>
      </div>
      <hr />
      <NewCard deck={deck} />
      <hr />
      <VocabList deck={deck} />
    </SideBarWrapper>
  );
};

export default React.memo(Sidebar);
