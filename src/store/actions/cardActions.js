export const setCardPile = (newCardPile) => dispatch => {
  dispatch({
    type: 'SET_CARD_PILE',
    newCardPile
  });
};

export const setCurrentCard = (newCurrentCard) => dispatch => {
  dispatch({
    type: 'HIDE_SIDEBAR',
    newCurrentCard
  });
};
