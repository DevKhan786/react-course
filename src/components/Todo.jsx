function Todo({ task, deleteClick }) {
  return (
    <div className="todo-item">
      <h2>{task}</h2>
      <button
        onClick={() => {
          deleteClick();
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
