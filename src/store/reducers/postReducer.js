export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';

const initialState = [];

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POST:
      return [action.payload, ...state];
    default:
      return state;
  }
};
