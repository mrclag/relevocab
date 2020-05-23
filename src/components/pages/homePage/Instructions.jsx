import React from 'react';

import { InstructionsWrapper } from './Instructions.styles';

export const Instructions = () => {
  return (
    <InstructionsWrapper>
      <div className="welcome-wrapper">
        <div className='welcome-title'>Welcome to Vocarta!</div>
        <div>
          To get started,
          <ol>
            <li>
              Add new deck on sidebar, or find premade decks on Songs page.
            </li>
            <li>
              Add new cards to your deck, or select Find Words to search for and
              add related vocabulary.
            </li>
            <li>Select a deck to begin practicing.</li>
            <li>
              Press Good to remove card from pile, and Again to place card back
              in deck.
            </li>
          </ol>
          <br />
        </div>
      </div>
    </InstructionsWrapper>
  );
};

export default Instructions;
