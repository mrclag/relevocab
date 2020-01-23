import React, { useState, useRef } from 'react';
import { Modal, ModalBackground } from '../../styles/sidebar/AddDeck.styles';
import { connect } from 'react-redux';
import { createDeck } from '../../store/actions/deckActions';

import { useOnClickOutside } from '../../utils/useOnClickOutside';

export const AddDeck = ({ isOpen, toggle, createDeck }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => toggle(false));

  const [name, setName] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    createDeck({ title: name });
    toggle(false);
  };

  return (
    <ModalBackground initialPose="closed" pose={isOpen ? 'open' : 'closed'}>
      <Modal ref={ref}>
        <h4>New Deck</h4>
        <div className="result">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.currentTarget.value)}
              autoFocus={true}
              maxLength="14"
            />
            <button>Add</button>
          </form>
        </div>
      </Modal>
    </ModalBackground>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    createDeck: deck => dispatch(createDeck(deck))
  };
};

export default connect(null, mapDispatchToProps)(AddDeck);
