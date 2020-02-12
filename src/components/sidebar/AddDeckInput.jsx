import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createDeck } from '../../store/actions/deckActions';

export const AddDeckInput = ({ isOpen, toggle, createDeck }) => {
  const [name, setName] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    createDeck({ title: name });
    setName('');
  };

  return (
    <form className="comment-form" onSubmit={onSubmit} autocomplete="off">
      <strong className="add-button">+</strong>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.currentTarget.value)}
        autoFocus={true}
        maxLength="14"
        placeholder="New Deck"
        name="New Deck"
      />
      <input type="submit" hidden />
    </form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    createDeck: deck => dispatch(createDeck(deck))
  };
};

export default connect(null, mapDispatchToProps)(AddDeckInput);
