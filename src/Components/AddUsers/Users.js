const Users = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.value);
  };

  return (
    <li onClick={deleteHandler}>
      {props.username} ({props.age} Years Old)
    </li>
  );
};

export default Users;
