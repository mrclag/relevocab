import React, { useState } from 'react';
import { connect } from 'react-redux';

import { googleTranslate } from '../../../services/translate';
import { addNewCard } from '../../../store/actions/deckActions';
import useFocus from '../../../utils/useFocus';

import { AddNewCardWrapper } from './AddNewCard.styles';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const NewCard = ({ deck, addNewCard, lang }) => {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [inputRef, setInputFocus] = useFocus();

  const onSubmit = (e) => {
    console.log('submitting');
    e.preventDefault();
    addNewCard({ front, back });
    setFront('');
    setBack('');
    setInputFocus();
  };

  const translateInput = (input, lang) => {
    googleTranslate.translate(input, lang, function (err, translation) {
      if (err || (translation && !translation.translatedText)) {
        setBack('no translation found');
      }
      translation && setBack(translation.translatedText);
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
            onChange={(e) => setFront(e.currentTarget.value)}
            autoFocus={true}
            maxLength="14"
            ref={inputRef}
          />
        </div>
        {/* <div
          onClick={() => translateInput(front, lang)}
          className="translate-input"
        >
          T
        </div> */}
        <div className="cardlistitem">
          <input
            type="text"
            placeholder="Back of card"
            value={back}
            onChange={(e) => setBack(e.currentTarget.value)}
            maxLength="14"
          />
        </div>
        <input type="submit" className="addbutton" value="Add" />
        {/* <FontAwesomeIcon icon={faPlus} className="addbutton" color='#306B34'/> */}
      </form>
    </AddNewCardWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewCard: (card) => dispatch(addNewCard(card)),
  };
};

export default connect(null, mapDispatchToProps)(React.memo(NewCard));
