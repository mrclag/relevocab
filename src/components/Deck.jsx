import React, { useState } from 'react';
import styled from 'styled-components';

import { deleteDeck } from '../store/actions/deckActions';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import deckIcon from '../images/deck.png';

const Deck = ({ deck, option, deleteDeck, location }) => {
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
      <span>
        <span style={{ marginLeft: '10px', marginBottom: '15px' }}>
          {option.title}
        </span>
      </span>
    </DeckWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteDeck: deckId => dispatch(deleteDeck(deckId))
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Deck));

const DeckWrapper = styled.div`
  vertical-align: middle;
  line-height: 30px;
  margin-top: 0px;
  display: flex;
  font-size: 0.8em;
  width: 250px;
  padding-left: 20px;
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
