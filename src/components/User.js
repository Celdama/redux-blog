import React from 'react';
import { useSelector } from 'react-redux';
import { usersSelector } from '../store/selectors/usersSelector';

export const User = ({ users }) => {
  return (
    <div className='user-container'>
      {users[0] && (
        <div className='user'>
          <h3>{users[0].pseudo}</h3>
          <img src='https://thispersondoesnotexist.com/image' alt='' />
          <p>Age : 35 ans</p>
          <p>
            Like{users[0].likes > 1 ? 's' : ''} : {users[0].likes}
          </p>
        </div>
      )}
    </div>
  );
};

export const UserStore = () => {
  const users = useSelector(usersSelector);

  return <User users={users} />;
};
