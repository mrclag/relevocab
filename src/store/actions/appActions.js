import uuidv4 from 'uuid/v4';

export const showSidebar = () => dispatch => {
  dispatch({
    type: 'SHOW_SIDEBAR'
  });
};

export const hideSidebar = () => dispatch => {
  dispatch({
    type: 'HIDE_SIDEBAR'
  });
};

export const toggleSidebar = sidebarVisibility => dispatch => {
  dispatch({
    type: 'TOGGLE_SIDEBAR',
    payload: sidebarVisibility
  });
};

export const createSong = (artist, title, cards, ) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const songId = uuidv4();

    firestore
      .collection('songs')
      .doc(songId)
      .set({
        songId: songId,
        artist: artist,
        title: title,
        cards: cards,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_SONG', cards });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_SONG_ERROR', err });
      });
  };
};
