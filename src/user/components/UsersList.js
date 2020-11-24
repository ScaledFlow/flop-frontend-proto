import React from 'react';

import UserItem from './UserItem';
import './UserList.scss';

const UserList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h1>No Users Found</h1>  
      </div>
    );
  }

  return <ul className="Users-list">
    {props.items.map(user => (
      <UserItem key={user.id} 
      id={user.id} 
      // image={user.image}
      name={user.name}
      // firstName={user.firstName}
      // lastName={user.lastName} 
      />
    ))}

    {/* {props.items.map(user => {
      return <UserItem />;
    })}
     */}
  </ul>

}

export default UserList;