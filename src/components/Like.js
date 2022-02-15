import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../store/selectors/usersSelector';
import { addLike } from '../store/actions/postAction';
import { addUserLike } from '../store/actions/userAction';

const Like = ({ post }) => {
  const { title, author, content, id } = post;
  const user = useSelector(usersSelector);
  const dispatch = useDispatch();

  const handleLike = () => {
    const postData = {
      title,
      author,
      content,
      likes: ++post.likes,
      id,
    };

    const userData = {
      pseudo: user[0].pseudo,
      likes: ++user[0].likes,
      id: user[0].id,
    };

    dispatch(addLike(postData));
    dispatch(addUserLike(userData));
  };

  return (
    <div onClick={handleLike}>
      <img src='./icons/clap.png' className='clap' alt='clap' />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
