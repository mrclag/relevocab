const initState = {
  sidebarVisibility: true
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
    default:
      return state;
  }
};

export default appReducer;
