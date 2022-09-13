//components can be functions or classes with func with hooks inside this func this looks like html but
//it is acc JSX js xml syntax
//what ever you return it has to be a single element
//you cant put anything outside the div container
//if you dint use the className fragment from the func its parent is going to be
//root instead of "App"
//we can write js directly into the func like const x = false; <h2>Hello {x ? "Yes" : "Nope"}</h2>
//we will create all our UI components in "components"
import { useState, useEffect } from "react"; //we use a hook, useEffect is used when you want to perform crud on you data on the db on the front-end
//fetch tasks from the server
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //routing the URLS
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  //using a hook they can only be called inside a function component
  //React structure works from top to bottom if you see when the person
  //created tasks he put them into the app.js so that it could be used by other
  //components if he were to keep it inside the tasks it would only be used by
  //components embedded in the tasks.

  const [tasks, setTasks] = useState([]);

  //The Effect Hook lets you perform side effects in function components:
  useEffect(() => {
    const getTasks = async () => {
      //this will be async because we will be calling fetchtasks which is returning a promise
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks(); //call gettasks
  }, []); //dependency array if you provide a value if it changes, useEffect will start to run

  //fetch tasks, we made this independent becase we might use this elsewhere
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks"); //fetch returns a promise so we wait await that promise in other words wait for the promise to complete
    const data = await response.json(); //now when the response is collect we will assign it to data with json format

    return data;
  };

  //fetch task
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`); //fetch returns a promise so we wait await that promise in other words wait for the promise to complete
    const data = await response.json(); //now when the response is collect we will assign it to data with json format

    return data;
  };

  //Add task
  const addTask = async (task) => {
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST", //we make a post req if we want to add to the db
      headers: {
        "Content-type": "application/json", //what kind of content do u want to add eg json
      },
      body: JSON.stringify(task), //task in the body which u will enter with the add button
    });

    const data = await response.json();
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1; //this will create a random number and assin it to an ID
    //  const newTask = { id, ...task }; //create a new task with the id and the 3 inputs you got from task which is passed in
    // setTasks([...tasks, newTask]); //now change the state of the array of tasks so it adds all the og tasks and
    //the new task which is added to display it
  };
  //delete task
  const deleteTask = async (id) => {
    //this is how we delete somehting from the json server adding 2 ``
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((DuplicateTask) => DuplicateTask.id !== id)); //filter takes in a function it filters from arrays
    console.log(id);
    //so task here in the bracket is like the copy of that function to comapare the tasks and remove them
  };

  //toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const uptTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT", //we make a PUT req if we want update existing record in the db
      headers: {
        "Content-type": "application/json", //what kind of content do u want to add eg json
      },
      body: JSON.stringify(uptTask), //task in the body which u will enter with the add button
    });
    const data = await response.json();
    //the tasks in our state map through each task the fake task if the task id is
    //eqaul to the passed Id then add a spread all the atributes of the faketask and set the reminder oposite to the current
    // reminder task else no change to the task
    setTasks(
      tasks.map((Faketask) =>
        Faketask.id === id ? { ...Faketask, reminder: data.reminder } : Faketask
      )
    );
  };

  return (
    //to add something in the place of our header we use something called props in the
    //component which it is called in
    //we wraped the render with the router
    <Router>
      <div className="Container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          addShow={showAddTask}
          title={"Task Tracker"}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {
                  showAddTask && (
                    <AddTask onAdd={addTask} />
                  ) /* showAddTask Default is false so normally you cannot see addTask */
                }
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No Tasks to show"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} /> /* we are routing the URLS
          in place and giving it the page name /about and inside the component
          About */
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

//using a class instead of a function
//extends react.component is geting the react Lifecycle
//and we import react at the top, and render takes care of the output
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>;
//   }
// }

export default App;
