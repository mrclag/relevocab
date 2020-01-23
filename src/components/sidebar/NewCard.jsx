import React, { useState } from 'react';
// import firebase from '../../firebase';
import { googleTranslate } from '../../services/translate';

import { NewCardWrapper } from '../../styles/sidebar/NewCard.styles';

import { connect } from 'react-redux';
import { addNewCard } from '../../store/actions/deckActions';

const NewCard = ({ deck, addNewCard }) => {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    addNewCard({ front, back });
    setFront('');
    setBack('');
  };

  const translateInput = input => {
    googleTranslate.translate(input, 'es', function(err, translation) {
      if (err || !translation.translatedText) {
        setBack('no translation found');
      }
      setBack(translation.translatedText);
    });
  };

  return (
    <NewCardWrapper>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Front of card"
            value={front}
            onChange={e => setFront(e.currentTarget.value)}
            autoFocus={true}
            maxLength="14"
            disabled={deck.title ? false : true}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Back of card"
            value={back}
            onChange={e => setBack(e.currentTarget.value)}
            maxLength="14"
            disabled={deck.title ? false : true}
          />
        </div>
        <button disabled={deck.title ? false : true}>Add New Card</button>
      </form>
      {/* <button
        onClick={() => translateInput(front)}
        style={{ width: '240px' }}
        disabled={deck.title ? false : true}
      >
        Translate
      </button> */}
    </NewCardWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addNewCard: card => dispatch(addNewCard(card))
  };
};

export default connect(null, mapDispatchToProps)(React.memo(NewCard));
