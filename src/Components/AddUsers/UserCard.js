import Card from "../UI/Card";
import classes from "./UserCard.module.css";
import React, { useState } from "react";

const UserCard = (props) => {
  const [card, setCard] = useState(props.userCard);

  console.log(props.userCard);

  if (props.userCard.length === 0) {
    return null;
  }

  const handleClick = (event) => {
    console.log("clicked!");
    console.log(event.target.value);
  };

  return (
    <Card className={classes.users}>
      <ul>
        {props.userCard.map((user) => (
          <li value={user.id} key={user.id} onClick={handleClick}>
            {user.username} ({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserCard;
