import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/actions/postAction';
import { usersSelector } from '../store/selectors/usersSelector';

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    likes: 0,
  });

  const dispatch = useDispatch();
  const users = useSelector(usersSelector);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ ...formData, author: users[0].pseudo }));
    setFormData({
      title: '',
      content: '',
      likes: 0,
    });
  };

  return (
    <div className='form-container'>
      <form>
        <input
          onChange={handleChange}
          name='title'
          value={formData.title}
          type='text'
          placeholder='Titre du poste'
        />
        <textarea
          onChange={handleChange}
          name='content'
          value={formData.content}
          placeholder='Postez vos pensées...'
        ></textarea>
        <input onClick={(e) => handleSubmit(e)} type='submit' value='Envoyer' />
      </form>
    </div>
  );
};

export default PostForm;
