import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from './components/Post';
import PostForm from './components/PostForm';
import User from './components/User';
import { getPosts } from './store/actions/postAction';
import { postSelector } from './store/selectors/postSelector';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector(postSelector);
  const content = posts.map((post, index) => <Post post={post} key={index} />);
  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className='content'>
        <div className='post-container'>{content}</div>
        <User />
      </div>
    </div>
  );
};

export default App;
