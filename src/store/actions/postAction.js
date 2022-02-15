import axios from 'axios';

// export const GET_POSTS = 'GET_POSTS';
import { GET_POSTS } from '../reducers/postReducer';

// export const getPosts = () => {
//   return async (dispatch) => {
//     try {
//       const res = await axios.get(
//         'http://localhost:3000/posts?_sort=id&_order=desc'
//       );
//       dispatch({ type: GET_POSTS, payload: res.data });
//     } catch (err) {
//       return console.log(err);
//     }
//   };
// };

// import axios from 'axios';
// import { GET_POSTS } from '../reducers/postReducer';
//
export const getPosts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        'http://localhost:3000/posts?_sort=id&_order=desc'
      );
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
