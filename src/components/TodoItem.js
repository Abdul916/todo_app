import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoItem = ({ todo }) => {
  const { updateTodo, toggleStatus, deleteTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleUpdate = () => {
    updateTodo(todo.id, newTitle);
    setIsEditing(false);
  };

  return (
    <li className='todo-item'>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <span onClick={() => toggleStatus(todo.id)}>
            {todo.title}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
