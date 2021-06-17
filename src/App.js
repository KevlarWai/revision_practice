import React, { useState } from "react";
import AddUserForm from './Components/AddUsers/AddUserForm';
import UserCard from './Components/AddUsers/UserCard';

const storeUsers = [];

function App() {

  const [users, setUsers] = useState(storeUsers);

  const addUserHandler = (user) => {
    setUsers((prevUser) => {
      return [user, ...prevUser];
    });
  };

  const onDeleteHandler = (userid) => {
    console.log(userid);
    setUsers(prevUser => {
      const user = prevUser.filter(user => user.id !== userid);
      return user;
    });
  };

  return (
    <div>
      <AddUserForm onAddUser={addUserHandler}></AddUserForm>
      <UserCard userCard={users} onDelete={onDeleteHandler}></UserCard>
    </div>
  );
}

export default App;
