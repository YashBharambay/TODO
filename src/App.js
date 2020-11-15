import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";
import "./App.css";
import "./components/css/dark.css";
import Form from "./components/Form";
import useThemeswitcher from "./components/useThemeswitcher";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";



const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setfilter] = useState("All");

  function deleteTask(id) {
    // when you pass the id of the li you want  to delete
    // the id is matched with the rest of the tasks
    // the unmatched tasks are filled into the arrayb named remaining tasksss
    const remainingTasks = tasks.filter((task) => id !== task.id);
    console.log(remainingTasks);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task

      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // this function is to add new todo
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    // Every new task was having the same id
    // we concatenated newtask with the existing task using this code
    // with normal code
    // let arr1 = [0, 1, 2];
    // let arr2 = [3, 4, 5];

    // //  Append all items from arr2 onto arr1
    // arr1 = arr1.concat(arr2);

    // with spread operator
    //     let arr1 = [0, 1, 2];
    // let arr2 = [3, 4, 5];

    // arr1 = [...arr1, ...arr2];
    // //  arr1 is now [0, 1, 2, 3, 4, 5]
    // // Note: Not to use const otherwise, it will give TypeError (invalid assignment)
    setTasks([...tasks, newTask]);
  }

  // function addTask(e) {
  //   e.preventDefault();
  //   alert("Hello jio")
  // }

  // this is the li tag in which our TODO is
  const tasklist = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setfilter={setfilter}
    />
  ));

  // this is for changing the number of tasks
  // we can also change tasks to task depending if it is only one task

  const taskcount = tasklist.length !== 1 ? "tasks" : "task";
  const verb = tasklist.length !== 1 ? "are" : "is";
  const headingText = `${tasklist.length} ${taskcount} ${verb} remaining`;

  const themechanger = useThemeswitcher();

  return (
    <div>
      {themechanger}

      <div className="todoapp stack-large">
        <Form addTask={addTask} />
        <div className="filters btn-group stack-exception">{filterList}</div>

        <h2 id="list-heading">{headingText}</h2>

        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {tasklist}
        </ul>
      </div>
    </div>
  );
}

export default App;
