import React from 'react';

import { InstructionsWrapper } from './Instructions.styles';

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
