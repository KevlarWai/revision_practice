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

  return (
    <div>
      <AddUserForm onAddUser={addUserHandler}></AddUserForm>
      <UserCard userCard={users}></UserCard>
    </div>
  );
}

export default App;
