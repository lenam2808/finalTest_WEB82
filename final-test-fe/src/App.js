import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(null);
  const [showUndoTask, setShowUndoTask] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks))
  // }, [tasks]);

  return (
    <div className="App">
      <div className="container">
        <TodoListHeader
          tasks={tasks}
          setTasks={setTasks}
          showUndoTask={showUndoTask}
          setShowUndoTask={setShowUndoTask}
        />
        <TodoList
          tasks={tasks}
          setTasks={setTasks}
          edit={edit}
          setEdit={setEdit}
          showUndoTask={showUndoTask}
          setShowUndoTask={setShowUndoTask}
        />
        <Form
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTasks={setTasks}
          edit={edit}
          setEdit={setEdit}
        />
      </div>
      <Footer />
    </div>
  );
};
