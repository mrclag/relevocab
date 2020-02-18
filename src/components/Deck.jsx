import React, { useState } from 'react';
import styled from 'styled-components';

import { deleteDeck } from '../store/actions/deckActions';
import { connect } from 'react-redux';
import deckIcon from '../images/deck.png';

const Deck = ({ deck, option, deleteDeck }) => {

  const selected = option.deckId === deck.deckId;
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  return (
    <DeckWrapper
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      selected={selected}
    >
      <span>
        <span>
          <img src={deckIcon} alt="deck icon" className="deck-icon" />
        </span>
        <span style={{ marginLeft: '8px', marginBottom: '15px' }}>
          {option.title}
        </span>
      </span>
      <span className="deck-list-item">
        <div className={hovered ? 'counter hide' : 'counter'}>
          {Object.keys(option.cards).length}
        </div>
        {option.title ? (
          <div
            onClick={() => deleteDeck(option.deckId)}
            className={hovered ? 'counter' : 'counter hide'}
          >
            X
          </div>
        ) : (
          ''
        )}
      </span>
    </DeckWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteDeck: deckId => dispatch(deleteDeck(deckId))
  };
};

export default connect(null, mapDispatchToProps)(Deck);

const DeckWrapper = styled.div`
  line-height: 30px;
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
  width: 250px;
  padding-left: 18px;
  padding-right: 30px;
  background-color: ${props => (props.selected ? '#107bbd' : '')};
  color: ${props => (props.selected ? 'white' : 'black')};

  .hide {
    display: none;
  }
  .counter {
    padding: auto;
    transform: translateY(-5px);
  }

  .deck-list-item {
    color: ${props => (props.selected ? 'black' : 'white')};
    background: ${props => (props.selected ? 'white' : '#107bbd')};
    font-size: 0.8em;
    margin-right: 30px;
    font-weight: bold;
    border-radius: 2px;
    width: 20px;
    text-align: center;
    height: 20px;
    margin: auto 0;
    vertical-align: middle;
  }

  .deck-icon {
    height: 13px;
    width: 13px;
  }
`;
