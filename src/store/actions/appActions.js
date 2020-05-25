import uuidv4 from 'uuid/v4';

export const showSidebar = () => (dispatch) => {
  dispatch({
    type: 'SHOW_SIDEBAR',
  });
};

export const hideSidebar = () => (dispatch) => {
  dispatch({
    type: 'HIDE_SIDEBAR',
  });
};

export const toggleSidebar = (sidebarVisibility) => (dispatch) => {
  dispatch({
    type: 'TOGGLE_SIDEBAR',
    payload: sidebarVisibility,
  });
};

// Uploads a song to DB
export const createSong = (artist, title, imgUrl, cards) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const songId = uuidv4();

    firestore
      .collection('songs')
      .doc(songId)
      .set({
        songId: songId,
        artist: artist,
        imgUrl: imgUrl,
        title: title,
        cards: cards,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_SONG', cards });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_SONG_ERROR', err });
      });
  };
};

export const getSongs = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const songList = [];

    firestore
      .collection('songs')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          songList.push(doc.data());
        });
        dispatch({ type: 'GET_SONGS', songList });
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error);

        dispatch({ type: 'GET_SONGS_ERROR', error });
      });
  };
};

export const submitFeedback = (name, email, message) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const feedbackId = uuidv4();

    firestore
      .collection('feedback')
      .doc(feedbackId)
      .set({
        feedbackId: feedbackId,
        name: name,
        email: email || 'n/a',
        message: message,
        createdAt: new Date(),
      })
      .then(() => {
        console.log('feedback submitted');
        dispatch({ type: 'SUBMIT_FEEDBACK' });
      })
      .catch((err) => {
        dispatch({ type: 'SUBMIT_FEEDBACK_ERROR', err });
      });
  };
};
