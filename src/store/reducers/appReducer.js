const initState = {
  sidebarVisibility: true,
  songsSearchResult: []
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SHOW_SIDEBAR':
      return { ...state, sidebarVisibility: true };
    case 'HIDE_SIDEBAR':
      return { ...state, sidebarVisibility: false };
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarVisibility: !action.payload };
    case 'CREATE_SONG':
      console.log('CREATED SONG');
      return { ...state };
    case 'CREATE_SONG_ERROR':
      console.log('CREATE SONG ERROR: ', action.err);
      return { ...state };
    case 'GET_SONGS':
      console.log('GOT SONGS');
      console.log(action.songList);
      return { ...state, songsSearchResult: action.songList };
    default:
      return state;
  }
};

export default appReducer;
