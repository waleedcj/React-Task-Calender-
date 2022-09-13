import { useState } from "react";

const AddTask = ({ onAdd }) => {
  //we imported the useState from react in order to change the state of these add task
  //day & reminder using state we can now enter and change and add values in the placeholder
  const [text, setText] = useState("");
  const [day, setday] = useState("");
  const [reminder, setreminder] = useState(false); //false because defining the default value

  const onSubmit = (e) => {
    //this so that content is not submited to a page
    e.preventDefault();

    if (!text) {
      //validation if task is not entered we return an alert on the screen
      alert("Please Add a task");
      return;
    }

    onAdd({ text, day, reminder }); //passing in the text day and reminder state into onAdd

    //reseting content
    setText("");
    setday("");
    setreminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)} //when we start to type in the input its gonna fire off
          //this on change so its gonna have a function and we are gonna pass in an event call setText
          //and set it to event on target value whatever is typed in
        />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input
          type="text"
          placeholder="Add Day"
          value={day}
          onChange={(e) => setday(e.target.value)}
        />
      </div>
      <div className="form-control from-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setreminder(e.currentTarget.checked)}
        />
      </div>
      <input
        style={{ backgroundColor: "green" }}
        type="submit"
        value="Save Task"
        className="btn btn-block"
      />
    </form>
  );
};

export default AddTask;
