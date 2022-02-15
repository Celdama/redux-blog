import { combineReducers } from 'redux';
import { userReducer } from './reducers/userReducer';
import { postReducer } from './reducers/postReducer';

export default combineReducers({
  postReducer,
  userReducer,
});
