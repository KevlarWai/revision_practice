import Card from "../UI/Card";
import classes from "./UserCard.module.css";

const UserCard = (props) => {
  console.log(props.userCard);

  if (props.userCard.length === 0) {
    return null;
  }

  return (
    <Card className={classes.users}>
      <ul>
        {props.userCard.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserCard;
