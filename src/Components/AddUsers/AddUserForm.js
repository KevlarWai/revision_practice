import "./AddUserForm.css";
import React, { useState } from "react";

const AddUserForm = () => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("username:");
    console.log(enteredUsername);
    console.log("age:");
    console.log(enteredAge);
    setUsername("");
    setAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="add-user__controls">
        <div>
          <label>Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
        </div>
        <div>
          <label>Age (Years)</label>
          <input
            type="number"
            min="0"
            step="1"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
        </div>
        <div className=".add-user__actions">
          <button type="submit">Add User</button>
        </div>
      </div>
    </form>
  );
};

export default AddUserForm;
