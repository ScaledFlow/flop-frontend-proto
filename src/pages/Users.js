import React from 'react';

import UsersList from '../components/UsersList';

const Users = props => {
  const USERS = [
    {
      id: 'ui', 
      name: 'John Leintz'
    }
  ]
  
  return (
   <UsersList items={USERS}/>
  )
}

export default Users;