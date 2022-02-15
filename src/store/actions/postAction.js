import axios from 'axios';

import {
  GET_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_LIKE,
} from '../reducers/postReducer';

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

export const addPost = (data) => {
  return async (dispatch) => {
    try {
      await axios.post('http://localhost:3000/posts', data);
      dispatch({
        type: ADD_POST,
        payload: data,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const editPost = (data) => {
  return async (dispatch) => {
    try {
      await axios.put(`http://localhost:3000/posts/${data.id}`, { ...data });
      dispatch({
        type: EDIT_POST,
        payload: { ...data },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      dispatch({
        type: DELETE_POST,
        payload: { id },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const addLike = (data) => {
  return async (dispatch) => {
    try {
      await axios.put(`http://localhost:3000/posts/${data.id}`, { ...data });
      dispatch({
        type: ADD_LIKE,
        payload: { ...data },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
