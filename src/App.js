import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PostForm from './components/PostForm';
import User from './components/User';
import { getPosts } from './store/actions/postAction';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className='content'>
        <div className='post-container'>CONTENU</div>
        <User />
      </div>
    </div>
  );
};

export default App;
