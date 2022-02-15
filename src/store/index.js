// import { combineReducers } from 'redux';
// import { userReducer } from './reducers/userReducer';
// import { postReducer } from './reducers/postReducer';

// export default combineReducers({
//   postReducer,
//   userReducer,
// });

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postReducer } from './reducers/postReducer';
import { userReducer } from './reducers/userReducer';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    posts: postReducer,
    users: userReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
