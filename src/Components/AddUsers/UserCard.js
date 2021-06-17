import Card from "../UI/Card";
import classes from "./UserCard.module.css";
import Users from "./Users";

const UserCard = (props) => {

  if (props.userCard.length === 0) {
    return null;
  }

  const handleClick = (event) => {
    props.onDelete(event);
  };

  return (
    <Card className={classes.users}>
      <ul>
        {props.userCard.map((user) => (
          <Users
            value={user.id}
            key={user.id}
            username={user.username}
            age={user.age}
            onDelete={handleClick}
          ></Users>
        ))}
      </ul>
    </Card>
  );
};

export default UserCard;
