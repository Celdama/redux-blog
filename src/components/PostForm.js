import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/actions/postAction';

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: 'Celdama',
    content: '',
    likes: 0,
  });

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
        <input onClick={(e) => handleSubmit()} type='submit' value='Envoyer' />
      </form>
    </div>
  );
};

export default PostForm;
