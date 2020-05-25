const initState = {
  sidebarVisibility: true,
  songsSearchResult: [],
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
      return { ...state };
    case 'CREATE_SONG_ERROR':
      console.log('CREATE SONG ERROR: ', action.err);
      return { ...state };
    case 'GET_SONGS':
      return { ...state, songsSearchResult: action.songList };
    case 'SUBMIT_FEEDBACK':
      return state;
    case 'SUBMIT_FEEDBACK_ERROR':
      console.log('SUBMIT_FEEDBACK_ERROR: ', action.err);
      return state;
    default:
      return state;
  }
};

export default appReducer;
