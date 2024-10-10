import { FaRegCircle, FaRegCheckCircle, FaTrash, FaEdit } from "react-icons/fa";

const TodoList = ({ tasks, setTasks, edit, setEdit, showUndoTask, setShowUndoTask }) => {
  console.log(tasks);

  const handleComplete = (task) => {
    setTasks(
      tasks.map((item) => {
        if(item.id === task.id) {
          return {...item, completed: !item.completed}
        }
        return item
      })
    )
  }

  const handleEdit=({id}) => {
    const findTask = tasks.find((todo) => todo.id === id);
    setEdit(findTask);
  }

  const handleDelete = ({id}) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <div className="todo-list-container">
      {tasks
      .filter(task => !showUndoTask || !task.completed)
      .map((task) => {
        return (
          <div key={task.id} className={task.completed ? "todo-item-container done" : "todo-item-container"}>
            {task.completed ? <FaRegCheckCircle className="item-done-button" color="#9a9a9a" onClick={() => {handleComplete(task)}}/> : <FaRegCircle className="item-done-button" color="#9a9a9a" onClick={() => {handleComplete(task)}}/>}
            <div className="item-title">{task.title}</div>
            <FaEdit className="item-edit-button" onClick={() => {handleEdit(task)}}/>
            <FaTrash className="item-trash-button" onClick={() => handleDelete(task)}/>
          </div>
        );
      })}

      {/* <div className="todo-item-container">
        <FaRegCircle className="item-done-button" color="#9a9a9a" />
        <div className="item-title">Do excercises</div>
      </div>
      <div className="todo-item-container">
        <FaRegCircle className="item-done-button" color="#9a9a9a" />
        <div className="item-title">Go shopping</div>
      </div>
      <div className="todo-item-container done">
        <FaRegCheckCircle color="#9a9a9a" className="item-done-button" />
        <div className="item-title">House cleaning</div>
      </div> */}
    </div>
  );
};

export default TodoList;
