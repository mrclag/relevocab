import React, { useState } from 'react';
import styled from 'styled-components';

import { withRouter } from 'react-router-dom';

const Deck = ({ deck, option, location }) => {
  const selected = deck.deckId ? option.deckId === deck.deckId : false;
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  return (
    <DeckWrapper
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      selected={selected}
      hovered={hovered}
    >
      <span className="deck-list-item">
        <div className="counter">{Object.keys(option.cards).length}</div>
      </span>
      <span>
        <span style={{ marginLeft: '10px', marginBottom: '15px' }}>
          {option.title}
        </span>
      </span>
    </DeckWrapper>
  );
};

export default withRouter(Deck);

const DeckWrapper = styled.div`
  vertical-align: middle;
  line-height: 30px;
  margin-top: 0px;
  overflow: hidden
  display: flex;
  font-size: 0.8em;
  width: 250px;
  padding-left: 20px;
  padding-right: 30px;
  background-color: ${props =>
    props.selected || props.hovered ? '#107bbd' : ''};
  color: ${props => (props.selected || props.hovered ? 'white' : 'black')};

  .hide {
    display: none;
  }
  .counter {
    padding: auto;
    transform: translateY(-5px);
  }

  .deck-list-item {
    color: ${props => (props.selected || props.hovered ? 'black' : 'white')};
    background: ${props =>
      props.selected || props.hovered ? 'white' : '#107bbd'};
    font-size: 0.8em;
    margin-right: 30px;
    font-weight: bold;
    border-radius: 2px;
    width: 18px;
    text-align: center;
    height: 18px;
    margin: auto 0;
    vertical-align: middle;
  }

  .deck-icon {
    height: 15px;
    width: 15px;
  }
`;
