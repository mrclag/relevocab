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
    console.log('submitting');
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
        <div onClick={() => translateInput(front)} className="translate-input">
          T
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
        <input type="submit" className="addbutton" value="Add" />
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
    position: relative;
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
      width: 45%;
      input {
        border: none;
        text-align: center;
        outline: none;
      }
      @media screen and (max-width: 800px) {
        width: 45%;
      }
    }
    .addbutton {
      border: 1px solid #eee
      width: 52px;
      background: lightgreen;
      cursor: pointer;
      @media screen and (max-width: 800px){
        width: 10%;
      }
    }
  }
  .translate-input {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    left: calc(45% + 2px);
    top: 10px;
    border: 1px solid black;
    line-height: 30px;
    background: white;
    cursor: pointer
    transform: translateX(-50%);
  }
`;
