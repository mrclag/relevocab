export const createDeck = deck => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection('decks')
      .add({
        ...deck,
        cards: [{ front: '', back: '' }],
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_DECK', deck });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_DECK_ERROR', err });
      });
  };
};

export const setCurrentDeck = deckName => {
  return {
    type: 'SET_CURRENT_DECK',
    deckName
  };
};

export const deleteDeck = deck => {};
