import axios from 'axios';

import { GET_USERS, ADD_USER_LIKE } from '../reducers/userReducer';

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('http://localhost:3000/users');
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const addUserLike = (data) => {
  return async (dispatch) => {
    try {
      await axios.put(`http://localhost:3000/users/${data.id}`, { ...data });
      dispatch({
        type: ADD_USER_LIKE,
        payload: { ...data },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
