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
    default:
      return state;
  }
};

export default appReducer;
