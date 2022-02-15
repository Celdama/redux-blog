import axios from 'axios';

import { GET_USERS } from '../reducers/userReducer';

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
