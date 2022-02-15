import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from './components/Post';
import PostForm from './components/PostForm';
import { UserStore } from './components/User';
import { getPosts } from './store/actions/postAction';
import { getUsers } from './store/actions/userAction';
import { postSelector } from './store/selectors/postsSelector';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  const posts = useSelector(postSelector);
  const content = posts.map((post, index) => <Post post={post} key={index} />);
  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className='content'>
        <div className='post-container'>{content}</div>
        <UserStore />
      </div>
    </div>
  );
};

export default App;
