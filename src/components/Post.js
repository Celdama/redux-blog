import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelector } from '../store/selectors/usersSelector';
import { editPost, deletePost } from '../store/actions/postAction';

import Like from './Like';

const Post = ({ post }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [editContent, setEditContent] = useState(post.content);
  const user = useSelector(usersSelector);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    const postData = {
      title: post.title,
      author: user[0].pseudo,
      content: editContent,
      likes: post.likes,
      id: post.id,
    };

    dispatch(editPost(postData));
    setEditToggle(!editToggle);
  };

  return (
    <div className='post'>
      {user[0] && user[0].pseudo === post.author && (
        <div>
          <button onClick={() => setEditToggle(!editToggle)}>edit</button>
          <button onClick={() => dispatch(deletePost(post.id))}>delete</button>
        </div>
      )}
      <h2>{post.title}</h2>
      <img
        src='https://picsum.photos/1500/400'
        className='post-img'
        alt='img-post'
      />

      {editToggle ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <textarea
            defaultValue={post.content}
            onChange={(e) => setEditContent(e.target.value)}
          ></textarea>
          <input type='submit' value='Valider modif' />
        </form>
      ) : (
        <p>{post.content}</p>
      )}

      <div className='author'>
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
};

export default Post;
