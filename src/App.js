import React, { useState } from "react";
import AddUserForm from './Components/AddUsers/AddUserForm';
import UserCard from './Components/AddUsers/UserCard';

function App() {

  const [users, setUsers] = useState();

  const addUserHandler = (user) => {
    // setUsers((prevUser) => {
    //   return [user, ...prevUser];
    // });
    console.log(user);
  };

  return (
    <div>
      <AddUserForm onAddUser={addUserHandler}></AddUserForm>
      <UserCard></UserCard>
    </div>
  );
}

export default App;
