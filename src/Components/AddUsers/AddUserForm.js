import "./AddUserForm.css";

const AddUserForm = () => {
  return (
    <form>
      <div className="add-user__controls">
        <div>
          <label>Username</label>
          <input></input>
        </div>
        <div>
          <label>Age (Years)</label>
          <input></input>
        </div>
        <div className='.add-user__actions'>
          <button type="submit">Add User</button>
        </div>
      </div>
    </form>
  );
};

export default AddUserForm;
