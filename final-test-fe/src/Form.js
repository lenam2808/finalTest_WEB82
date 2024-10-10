import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
const Form = ({input, setInput, tasks, setTasks, edit, setEdit}) => {
  const updateTask = (title, id, completed) => {
    const newTask = tasks.map((task) => 
      task.id === id ? {title, id, completed} : task
    )
    setTasks(newTask);
    setEdit("")
  };
  useEffect(() => {
    if(edit) {
      setInput(edit.title);
    } else {
      setInput("")
    }
  }, [setInput, edit])
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!edit) {
      setTasks([...tasks, {id: uuidv4(), title: input, completed: false}])
      setInput("");
    } else {
      updateTask(input, edit.id, edit.completed)
    }
    
  }
    return (
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter task ..." value={input} onChange={handleInputChange} required/>
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default Form;
  