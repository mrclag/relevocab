const initState = {
  cardPile: [],
  currentCard: {
    front: 'Press Start',
    back: 'Press Start',
    start: true
  },
  flipped: false
};

const cardReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_CARD_PILE':
      return {
        ...state,
        cardPile: action.newCardPile
      };
    case 'SET_CURRENT_CARD':
      return {
        ...state,
        currentCard: action.newCurrentCard
      };
    default:
      return state;
  }
};

export default cardReducer;
