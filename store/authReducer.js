let initialState = false;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return (state = true);

    case 'LOG_OUT':
      return (state = false);

    default:
      return state;
  }
};

export default authReducer;