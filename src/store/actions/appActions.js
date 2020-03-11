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

export const createSong = (artist, title, imgUrl, cards) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const songId = uuidv4();
    console.log(cards);
    for (let i = 0; i < cards.length; i++) {
      console.log(cards[i]);
      if (
        !cards[i].front ||
        cards[i].front.length === 0 ||
        cards[i].front[0] === '['
      ) {
        cards.splice(i, 1);
        i--;
      } else {
        for (let j = 0; j < cards[i].front.length; j++) {
          if (cards[i].front[j] === '?') cards[i].front.splice(j, 1);
        }
        for (let j = 0; j < cards[i].back.length; j++) {
          if (cards[i].back[j] === '?') cards[i].back.splice(j, 1);
        }
      }
    }
    console.log('CLEAN: ', cards);

    firestore
      .collection('songs')
      .doc(songId)
      .set({
        songId: songId,
        artist: artist,
        imgUrl: imgUrl,
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

export const getSongs = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const songList = [];

    firestore
      .collection('songs')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          songList.push(doc.data());
        });
        dispatch({ type: 'GET_SONGS', songList });
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);

        dispatch({ type: 'GET_SONGS_ERROR', error });
      });
  };
};
