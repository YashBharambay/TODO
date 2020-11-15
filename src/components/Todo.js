import React, { useState } from "react";
import Form from "./Form";
import "./css/Todo.css";

function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  // EDit TEMPLATE
  const editingTemplate = (
    <form className="todo" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          onChange={handleChange}
          id={props.id}
          className="todo-text"
          type="text"
        />
      </div>
      <div className="Edit">
        <button
          onClick={() => setEditing(false)}
          type="button"
          className="btn todo-cancel"
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn colot">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  // VIEW TEMPLATE

  const viewTemplate = (
    <div className="todo">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="Edit">
        <button onClick={() => setEditing(true)} type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn  colot"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  // MAIN

  return (
    <div>
      <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
    </div>
  );
}

export default Todo;
