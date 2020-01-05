const initState = {
  authError: null,
  currentDeck: { cards: [{}] },
  initDeck: [
    {
      title: 'Example Deck',
      cards: [
        { front: 'hello', back: 'hola' },
        { front: 'onion', back: 'cebolla' },
        { front: 'apple', back: 'manzana' },
        { front: 'orange', back: 'naranja' }
      ],
      authorId: 'test',
      createdAt: new Date()
    }
  ]
};

const deckReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_DECK':
      console.log('Added deck', action.deck);
      return state;
    case 'ADD_DECK_ERROR':
      console.log('add deck error', action.err);
      return state;
    case 'SET_CURRENT_DECK':
      console.log(action.deck);
      return {
        ...state,
        currentDeck: action.deck,
        currentCards: Object.keys(action.deck.cards).map(
          (key, i) => action.deck.cards[key]
        )
      };
    case 'ADD_CARD':
      console.log('added card');
      console.log(state);
      return state;
    case 'ADD_CARD_ERR':
      console.log('add card err', action.err);
      return state;
    case 'DELETE_CARD':
      console.log('deleted card');
      return state;
    case 'DELETE_CARD_ERROR':
      console.log('delete card error', action.err);
      return state;
    default:
      return state;
  }
};

export default deckReducer;
