import { FaTimes } from "react-icons/fa"; //this will import react icons which we will use

//we are all getting this through the map
const Task = ({ task, onDelete, onToggle }) => {
  //if the task.reminder is true then include the css class reminder else do nothing
  //task.reminder ? "True condition" : "False condition"
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
