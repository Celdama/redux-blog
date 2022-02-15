const initialState = [];

export const GET_USERS = 'GET_USERS';
export const ADD_USER_LIKE = 'ADD_USER_LIKE';

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case ADD_USER_LIKE:
      return state.map((user) => {
        return user.id === action.payload.id
          ? { ...user, likes: action.payload.likes }
          : user;
      });
    default:
      return state;
  }
};
