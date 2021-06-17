import Card from "./Card";
import Button from "./Button";
import classes from "./Error.module.css";

const Error = (props) => {

  const clickHandler = () => {
    props.clicked();
  };

  return (
    <div className={classes.backdrop}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={clickHandler}>Continue</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Error;
