//create array of sum objects temp just
import Task from "./Task";

//instead of this <h3 key={task.id}>{task.text}</h3>
//it will be wraped around a task component
// <Task key={task.id} task={task} /> and will be passed as each task as a prop

//'task' is called the each task
//using map too loop through the array of object of type 'text'
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
