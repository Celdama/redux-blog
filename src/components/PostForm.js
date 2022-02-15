import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost, getPosts } from '../store/actions/postAction';
import { usersSelector } from '../store/selectors/usersSelector';

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, content } = formData;

    if (title && content) {
      const data = {
        title,
        content,
        author: users[0].pseudo,
        likes: 0,
      };

      await dispatch(addPost(data));

      dispatch(getPosts());
      setFormData({
        title: '',
        content: '',
      });
    }
  };

  return (
    <div className='form-container'>
      <form>
        <input
          onChange={(e) => handleChange(e)}
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
