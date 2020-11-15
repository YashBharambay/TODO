import React, { useState } from "react";
import "./css/Form.css"




function Form(props) {

  const [name, setName] = useState("");

  {
    /**
        What's going on in this line of code?
        We are setting the initial name value as "Use hooks!".
        We are defining a function whose job is to modify name, called setName().
        seState() returns these two things, so we are using array destructuring to capture them both in separate variables.
     */
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  function handlesubmit(e) {
    e.preventDefault();

    props.addTask(name);
    //    the below line is called for clearing the input line
    setName("");
  }

  return (
    <form onSubmit={handlesubmit}>
      <h2 className="form">
        <label htmlFor="new-todo-input" className="label__lg">
          ADD YOUR STUFF
        </label>
      </h2>
      <div className="fields">
      <input
        
        type="text"
        id="new-todo-input"
        className="input"
        name="text"
        autoComplete="off"
        placeholder="Add a todo"
        value={name}
        onChange={handleChange}
        
        
      />
       <button type="submit" className="Add-button">
        Add
      </button>
      </div>
     
    </form>
  );
}

export default Form;
