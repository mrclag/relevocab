const initState = {
  authError: null,
  currentDeck: { cards: { 1: { front: '', back: '' } } },
};

const deckReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_DECK':
      console.log('Added deck', action.deck);
      return state;
    case 'ADD_DECK_ERROR':
      console.log('add deck error', action.err);
      return state;
    case 'DELETE_DECK':
      console.log('delete deck');
      return {
        ...state,
        currentCards: null,
        currentDeck: {},
      };
    case 'DELETE_DECK_ERROR':
      console.log('delete deck error', action.err);
      return state;
    // case 'CREATE_INIT_DECK':
    //   return {
    //     ...state,
    //     currentDeck: action.initDeck,
    //     currentCards: Object.keys(action.initDeck).map(
    //       (key, i) => action.initDeck[key]
    //     )
    //   };
    // case 'CREATE_INIT_DECK_ERROR':
    //   return state;
    case 'SET_CURRENT_DECK':
      console.log(action.deck);
      return {
        ...state,
        currentDeck: action.deck,
        currentCards: Object.keys(action.deck.cards).map(
          (key, i) => action.deck.cards[key]
        ),
      };
    case 'ADD_CARD':
      console.log('added card');
      return {
        ...state,
        currentDeck: action.currentDeck,
        currentCards: Object.keys(action.cardsList).map(
          (key, i) => action.cardsList[key]
        ),
      };
    case 'ADD_CARD_ERR':
      return state;
    case 'DELETE_CARD':
      return {
        ...state,
        currentCards: action.currentCards,
        currentDeck: action.currentDeck,
      };
    case 'DELETE_CARD_ERROR':
      console.log('delete card error', action.err);
      return state;
    case 'ADD_SONG':
      return state;
    case 'ADD_SONG_ERROR':
      console.log('add song error', action.err);
      return state;
    case 'UPDATE_LAST_PRACTICED':
      return state;
    case 'UPDATE_LAST_PRACTICED_ERROR':
      console.log('update last practiced time error: ', action.err);
      return state;
    default:
      return state;
  }
};

export default deckReducer;
