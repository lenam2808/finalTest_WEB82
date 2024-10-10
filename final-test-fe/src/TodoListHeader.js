const Header = ({ tasks, setTasks, showUndoTask, setShowUndoTask }) => {
  const handleShowTask = () => {
    setShowUndoTask(!showUndoTask);
  };
  return (
    <>
      <div className="header-container">
        <div className="header">
          You have {tasks.length} tasks left!
          <div>
            <input type="checkbox" checked={showUndoTask}  onChange={handleShowTask}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
