const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  error: null,
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_COLLECTIONS":
      return { ...state, isFetching: true };

    case "SUCCESS_COLLECTIONS":
      return { ...state, collections: action.payload, isFetching: false };

    case "FAILED_COLLECTIONS": {
      return{...state,error:action.payload}
    }

    default:
      return state;
  }
};

export default shopReducer;
