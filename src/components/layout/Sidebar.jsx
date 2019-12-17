import React from 'react';
import NewCard from '../../components/NewCard';
import VocabList from '../../components/VocabList';

import styled from 'styled-components';
import {
  SideBarWrapper,
  Title,
  NavLinks
} from '../../styles/layout/Sidebar.styles';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SideBarWrapper>
      <Title>Relevocab</Title>\
      <NavLinks>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/search">
          Search
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </NavLinks>
      <hr />
      <NewCard />
      <hr />
      <VocabList />
    </SideBarWrapper>
  );
};

export default React.memo(Sidebar);
