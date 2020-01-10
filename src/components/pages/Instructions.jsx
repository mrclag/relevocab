import React from 'react';

import styled from 'styled-components';

const Instructions = () => {
  return (
    <InstructionsWrapper>
      <h1>Get Started:</h1>
      <div style={{ width: '40vw' }}>
        <div className="instructions">
          <ul>
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
          </ul>
          <br />
        </div>
      </div>
    </InstructionsWrapper>
  );
};

export default Instructions;

const InstructionsWrapper = styled.div`
  margin-left: 400px;
  margin-top: 20vh;
  font-size: 1.25em;
  li {
    margin: 30px 0;
  }
`;
