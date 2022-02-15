export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const ADD_LIKE = 'ADD_LIKE';

const initialState = [];

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POST:
      return [action.payload, ...state];
    case EDIT_POST:
      return state.map((post) => {
        return post.id === action.payload.id
          ? { ...post, content: action.payload.content }
          : post;
      });
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload.id);
    case ADD_LIKE:
      return state.map((post) => {
        return post.id === action.payload.id
          ? { ...post, likes: action.payload.likes }
          : post;
      });
    default:
      return state;
  }
};
