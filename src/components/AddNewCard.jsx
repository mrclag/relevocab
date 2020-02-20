import React, { useState } from 'react';
import styled from 'styled-components';

import { googleTranslate } from '../services/translate';
import { connect } from 'react-redux';
import { addNewCard } from '../store/actions/deckActions';

import useFocus from '../utils/useFocus';

const NewCard = ({ deck, addNewCard }) => {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [inputRef, setInputFocus] = useFocus();

  const onSubmit = e => {
    e.preventDefault();
    addNewCard({ front, back });
    setFront('');
    setBack('');
    setInputFocus();
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
    <AddNewCardWrapper>
      <form onSubmit={onSubmit} className="add-new-card">
        <div className="cardlistitem">
          <input
            type="text"
            placeholder="Front of card"
            value={front}
            onChange={e => setFront(e.currentTarget.value)}
            autoFocus={true}
            maxLength="14"
            ref={inputRef}
          />
        </div>
        <div className="cardlistitem">
          <input
            type="text"
            placeholder="Back of card"
            value={back}
            onChange={e => setBack(e.currentTarget.value)}
            maxLength="14"
          />
        </div>
        <button className="addbutton">Add New Card</button>
      </form>
      {/* <button
        onClick={() => translateInput(front)}
        style={{ width: '240px' }}
        disabled={deck.title ? false : true}
      >
        Translate
      </button> */}
    </AddNewCardWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addNewCard: card => dispatch(addNewCard(card))
  };
};

export default connect(null, mapDispatchToProps)(React.memo(NewCard));

const AddNewCardWrapper = styled.div`
  .add-new-card {
  display: flex;
  flex-direction: row;
  margin: 0px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  .cardlistitem {
    border: 1px solid #eee;
    width: 30vw;
    input {
      border: none;
      text-align: center;
    }
    @media screen and (max-width: 800px) {
      width: 45vw;
    }
  }
  .addbutton {
    border: 1px solid #eee
    width: 50px;
    background: lightgreen;
    cursor: pointer;
    @media screen and (max-width: 800px){
      width: 10vw;
    }
  }
  }
`;
