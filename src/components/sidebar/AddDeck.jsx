import React, { useState, useEffect, useRef } from 'react';
import { Modal, ModalBackground } from '../../styles/sidebar/AddDeck.styles';

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler, ref]); // Empty array ensures that effect is only run on mount and unmount
}

export const AddDeck = ({ isOpen, toggle, addDeck }) => {
  const ref = useRef();

  useOnClickOutside(ref, () => toggle(false));
  const [name, setName] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    addDeck(name);
    toggle(false);
  };

  return (
    <ModalBackground initialPose="closed" pose={isOpen ? 'open' : 'closed'}>
      <Modal ref={ref}>
        <h4 style={{ fontWeight: '700' }}>New Deck</h4>
        <div className="result">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.currentTarget.value)}
              autoFocus={true}
              maxLength="14"
            />
            <button>Add Deck</button>
          </form>
        </div>
      </Modal>
    </ModalBackground>
  );
};

export default AddDeck;
