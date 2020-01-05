import uuidv4 from 'uuid/v4';

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

export const setCurrentDeck = deck => {
  return {
    type: 'SET_CURRENT_DECK',
    deck
  };
};

export const deleteDeck = deck => {};

export const addNewCard = card => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const deckTitle = getState().deck.currentDeck.title;
    const cardId = uuidv4();
    const cardsList = getState().deck.currentDeck.cards;
    cardsList[cardId] = { id: cardId, front: card.front, back: card.back };

    firestore
      .collection('decks')
      .doc('GDAgHtgnQtGbCvKkP481')
      .update({
        cards: cardsList
      })
      .then(() => {
        dispatch({ type: 'ADD_CARD', card });
      })
      .catch(err => {
        dispatch({ type: 'ADD_CARD_ERR', err });
      });
  };
};
