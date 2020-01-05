import React, { useState } from 'react';
import styled from 'styled-components';

const Deck = ({ deck, option }) => {
  const selected = option === deck;
  const [hovered, setHovered] = useState(false);

  return (
    <DeckWrapper selected={selected}>
      <span>{option.title}</span>
      <span
        style={{
          color: selected ? 'black' : 'white',
          fontSize: '0.8em',
          marginRight: '30px',
          fontWeight: 'bold',
          background: selected ? 'white' : '#107bbd',
          borderRadius: '2px',
          width: '20px',
          textAlign: 'center',
          height: '20px',
          margin: 'auto 0',
          verticalAlign: 'middle'
        }}
      >
        <div style={{ padding: 'auto', transform: 'translateY(-5px)' }}>
          {Object.keys(option.cards).length}
        </div>
        <div class={hovered}>X</div>
      </span>
    </DeckWrapper>
  );
};

export default Deck;

const DeckWrapper = styled.div`
  line-height: 30px;
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
  width: 225px;
  padding-left: 45px;
  padding-right: 30px;
  background-color: ${props => (props.selected ? '#107bbd' : '')};
  color: ${props => (props.selected ? 'white' : 'black')};
`;

// const Counter = styled.span`
//     color: black,
//     padding-left: 10px,
//     background-color: lightblue;
//     border-radius: 2px;
//     padding: 0 5px;
// `;
