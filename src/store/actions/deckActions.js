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

export const deleteDeck = deckId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('decks')
      .doc(deckId)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_DECK' });
      })
      .catch(err => {
        dispatch({ type: 'DELETE_DECK_ERROR', err });
      });
  };
};

// export const createInitDeck = () => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     const authorId = getState().firebase.auth.uid;
//     const deckId = uuidv4();

//     const initDeck = {
//       title: 'Example Deck',
//       cards: {
//         1: { front: 'hello', back: 'hola' },
//         2: { front: 'onion', back: 'cebolla' },
//         3: { front: 'apple', back: 'manzana' },
//         4: { front: 'orange', back: 'naranja' }
//       },
//       authorId: authorId,
//       createdAt: new Date()
//     };

//     firestore
//       .collection('decks')
//       .doc(deckId)
//       .set(initDeck)
//       .then(() => {
//         dispatch({ type: 'CREATE_INIT_DECK', initDeck });
//       })
//       .catch(err => {
//         dispatch({ type: 'CREATE_INIT_DECK_ERROR', err });
//       });
//   };
// };

export const setCurrentDeck = deck => {
  return {
    type: 'SET_CURRENT_DECK',
    deck
  };
};

export const addNewCard = card => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    console.log(getState());
    const deckId = getState().deck.currentDeck.deckId;
    const cardId = uuidv4();
    const cardsList = { ...getState().deck.currentDeck.cards };

    const currentDeck = { ...getState().deck.currentDeck, cards: cardsList };

    cardsList[cardId] = { id: cardId, front: card.front, back: card.back };

    firestore
      .collection('decks')
      .doc(deckId)
      .update({
        cards: cardsList
      })
      .then(() => {
        console.log(cardsList);
        dispatch({ type: 'ADD_CARD', cardsList, currentDeck });
      })
      .catch(err => {
        dispatch({ type: 'ADD_CARD_ERR', err });
      });
  };
};

export const deleteCard = cardId => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const deckId = getState().deck.currentDeck.deckId;
    const cardsList = { ...getState().deck.currentDeck.cards };
    delete cardsList[cardId];

    const currentDeck = { ...getState().deck.currentDeck, cards: cardsList };
    const currentCards = Object.keys(cardsList).map((key, i) => cardsList[key]);

    console.log(cardsList, currentCards);

    firestore
      .collection('decks')
      .doc(deckId)
      .update({
        cards: cardsList
      })
      .then(res => {
        console.log('deleted card');
        dispatch({ type: 'DELETE_CARD', currentCards, currentDeck });
      })
      .catch(err => {
        console.log('ERROR', err);
        dispatch({ type: 'DELETE_CARD_ERR', err });
      });
  };
};

export const addSongAsDeck = (song) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const deckId = uuidv4();
    const {title, artist, cards} = song

    firestore
      .collection('decks')
      .doc(deckId)
      .set({
        title: title,
        artist: artist,
        deckId: deckId,
        cards: cards,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'ADD_SONG', song });
      })
      .catch(err => {
        dispatch({ type: 'ADD_SONG_ERROR', err });
      });
  };
};
