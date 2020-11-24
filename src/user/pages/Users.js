import React from 'react';

// import UsersList from '../../components/UsersList';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'ui01', 
      name: 'John Leintz'
    },
    {
      id: 'ui02', 
      name: 'Bob Leintz'
    }
  ]
  
  return (
   <UsersList items={USERS}/>
  )
}

export default Users;