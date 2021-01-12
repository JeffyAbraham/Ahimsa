const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: "Something went wrong :(",
      };
    default:
      return state;
  }
};

export default userReducer;
