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
        currentDeck: action.deck
      };
    default:
      return state;
  }
};

export default deckReducer;
