import React from 'react';

import styled from 'styled-components';

const Instructions = () => {
  return (
    <InstructionsWrapper>
      <h1>Welcome to Vocarta!</h1>
      <div>
        To get started,
        <ol>
          <li>Add a new deck</li>
          <li>
            Add new cards to your deck on the bottom of the sidebar, or select
            Find Words to search vocabulary relevant to the search term.
          </li>
          <li>Select a deck to begin practicing.</li>
          <li>
            Press Good to remove card from pile, and Again to place the card
            back in the deck.
          </li>
        </ol>
        <br />
      </div>
    </InstructionsWrapper>
  );
};

export default Instructions;

const InstructionsWrapper = styled.div`
  margin-left: 50px;
  margin-top: 20px;
  font-size: 1.25em;
  width: 40vw;
  li {
    margin: 30px 0;
  }
  @media screen and (max-width: 800px) {
    margin-left: 5vw;
    width: 90vw;
    margin-right: 5vw;
  }
`;
