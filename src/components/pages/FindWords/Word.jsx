import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { googleTranslate } from '../services/translate';
import { connect } from 'react-redux';
import pb from '../images/plus_blue.png';
import pw from '../images/plus_white.png';
import { addNewCard } from '../store/actions/deckActions';

const Word = ({ currentDeck, word, addNewCard, selected }) => {
  const [translation, setTranslation] = useState('');
  let selectedWord = selected === word;

  useEffect(() => {
    googleTranslate.translate(word, 'es', function(err, translation) {
      if (err || !translation.translatedText) {
        setTranslation('no translation found');
      }
      setTranslation(translation.translatedText);
    });
  }, [word]);

  const onClick = () => {
    currentDeck.title
      ? addNewCard({
          front: word,
          back: translation
        })
      : alert('Please select a deck to add a card');
  };

  return (
    <WordWrapper selectedWord={selectedWord}>
      <AddButton selectedWord={selectedWord} onClick={onClick}>
        <img
          src={selectedWord ? pw : pb}
          alt="plus"
          className="word-add-button"
        />
      </AddButton>
      <br />
      <div className="word-text-front">
        <span className="word-word">{word}</span>
        <br />
      </div>
      <div className="word-text-back">
        <span>{translation}</span>
      </div>
    </WordWrapper>
  );
};

const mapStateToProps = state => {
  return {
    currentDeck: state.deck.currentDeck
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewCard: card => dispatch(addNewCard(card))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Word);

const WordWrapper = styled.div`
  height: 40px;
  width: 400px;
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.1);
  border: 0.5px solid #555;
  border-radius: 7px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: ${props => (props.selectedWord ? 'white' : 'black')};
  background: ${props => (props.selectedWord ? '#107bbd' : 'white')}
  cursor: context-menu;
  display: flex;
  font-size: 0.92em;
  .title {
    font-weight: bold;
  }
  .word-add-button{
    max-width: 100%;
    max-height: 100%;
    cursor: pointer
  }
  .word-text-front{
    margin-left: 15px;
    border-radius: 0px 7px 7px 0px
    padding-right: 10px;
    padding-top: 10px;
    width: 180px;
  }
  .word-text-back{
    padding-left: 10px;
    margin-left: 0px;
    border-left: 1px solid black;
    padding-top: 10px;
    width: 200px;
  }
  .word-word{
    font-weight: bold;
    
  }
  @media screen and (max-width: 800px){
    width: 100%;
    .word-text-front{
      width: 36vw;
      margin-left: 8px
    }
    .word-text-back{
      width: 40vw;
    }
    .word-add-button{

    }
  }
`;

const AddButton = styled.div`
  height: 15px;
  width: 15px;
  text-align: center;
  border: ${props =>
    props.selectedWord ? '1px solid white' : '1px solid #107bbd'};
  border-radius: 15%;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 5vw;
    height: 5vw;
  }
`;
