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
