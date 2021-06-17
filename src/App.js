import React, { useState } from "react";
import AddUserForm from "./Components/AddUsers/AddUserForm";
import UserCard from "./Components/AddUsers/UserCard";
import Error from "./Components/UI/Error";

const storeUsers = [];

function App() {
  const [users, setUsers] = useState(storeUsers);
  const [err, setError] = useState("");

  const addUserHandler = (user) => {
    setUsers((prevUser) => {
      return [user, ...prevUser];
    });
  };

  const onDeleteHandler = (userid) => {
    console.log(userid);
    setUsers((prevUser) => {
      const user = prevUser.filter((user) => user.id !== userid);
      return user;
    });
  };
  const errorHandler = () => {
    console.log("Error detected!");
    setError(
      <Error
        title="Error"
        message="Something went wrong!"
        clicked={resetError}
      ></Error>
    );
  };

  const resetError = () => {
    setError("");
  };

  return (
    <div>
      {err}
      <AddUserForm
        onAddUser={addUserHandler}
        onError={errorHandler}
      ></AddUserForm>
      <UserCard userCard={users} onDelete={onDeleteHandler}></UserCard>
    </div>
  );
}

export default App;
