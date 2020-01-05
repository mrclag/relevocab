import uuidv4 from 'uuid/v4';

export const createDeck = deck => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const deckId = uuidv4();

    firestore
      .collection('decks')
      .doc(deckId)
      .set({
        ...deck,
        deckId: deckId,
        cards: {},
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

export const addNewCard = card => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const deckId = getState().deck.currentDeck.deckId;
    const cardId = uuidv4();
    const cardsList = getState().deck.currentDeck.cards;
    cardsList[cardId] = { id: cardId, front: card.front, back: card.back };

    firestore
      .collection('decks')
      .doc(deckId)
      .update({
        cards: cardsList
      })
      .then(() => {
        console.log(cardsList);
        dispatch({ type: 'ADD_CARD', card });
      })
      .catch(err => {
        dispatch({ type: 'ADD_CARD_ERR', err });
      });
  };
};

export const deleteCard = cardId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const cardsList = getState().deck.currentDeck.cards;
    delete cardsList[cardId];

    firestore
      .collection('decks')
      .doc('sCdFHVxuqlQZ01TXzNOX')
      .update({
        cards: cardsList
      })
      .then(() => {
        dispatch({ type: 'DELETE_CARD' });
      })
      .catch(err => {
        dispatch({ type: 'DELETE_CARD_ERR', err });
      });
  };
};
