const initialState = [];

export const GET_USERS = 'GET_USERS';

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
};
