import uuidv4 from 'uuid/v4';

export const createDeck = (deck) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const deckId = uuidv4();

    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    var time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var dateTime = date + ' ' + time;

    firestore
      .collection('decks')
      .doc(deckId)
      .set({
        ...deck,
        deckId: deckId,
        cards: {},
        authorId: authorId,
        type: 'DEFAULT',
        lastPracticed: dateTime,
        createdAt: dateTime,
      })
      .then(() => {
        dispatch({ type: 'CREATE_DECK', deck });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_DECK_ERROR', err });
      });
  };
};

export const deleteDeck = (deckId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('decks')
      .doc(deckId)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_DECK' });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_DECK_ERROR', err });
      });
  };
};

export const setCurrentDeck = (deck) => {
  return {
    type: 'SET_CURRENT_DECK',
    deck,
  };
};

export const addNewCard = (card) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const deckId = getState().deck.currentDeck.deckId;
    const cardId = uuidv4();
    const cardsList = { ...getState().deck.currentDeck.cards };

    const currentDeck = { ...getState().deck.currentDeck, cards: cardsList };

    cardsList[cardId] = { id: cardId, front: card.front, back: card.back };

    firestore
      .collection('decks')
      .doc(deckId)
      .update({
        cards: cardsList,
      })
      .then(() => {
        dispatch({ type: 'ADD_CARD', cardsList, currentDeck });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_CARD_ERR', err });
      });
  };
};

export const deleteCard = (cardId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const deckId = getState().deck.currentDeck.deckId;
    const cardsList = { ...getState().deck.currentDeck.cards };
    delete cardsList[cardId];

    const currentDeck = { ...getState().deck.currentDeck, cards: cardsList };
    const currentCards = Object.keys(cardsList).map((key, i) => cardsList[key]);

    firestore
      .collection('decks')
      .doc(deckId)
      .update({
        cards: cardsList,
      })
      .then((res) => {
        dispatch({ type: 'DELETE_CARD', currentCards, currentDeck });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_CARD_ERR', err });
      });
  };
};

export const addSongAsDeck = (song) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const deckId = uuidv4();
    const { title, artist, cards, imgUrl } = song;

    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    var time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var dateTime = date + ' ' + time;

    firestore
      .collection('decks')
      .doc(deckId)
      .set({
        title: title,
        artist: artist,
        deckId: deckId,
        cards: cards,
        authorId: authorId,
        type: 'SONG',
        imgUrl: imgUrl,
        createdAt: dateTime,
        lastPracticed: dateTime,
      })
      .then(() => {
        dispatch({ type: 'ADD_SONG', song });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_SONG_ERROR', err });
      });
  };
};

export const updateLastPracticed = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const deckId = getState().deck.currentDeck.deckId;

    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    var time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var dateTime = date + ' ' + time;

    firestore
      .collection('decks')
      .doc(deckId)
      .update({
        lastPracticed: dateTime,
      })
      .then(() => {
        dispatch({ type: 'UPDATE_LAST_PRACTICED' });
      })
      .catch((err) => {
        dispatch({ type: 'UPDATE_LAST_PRACTICED_ERROR', err });
      });
  };
};
