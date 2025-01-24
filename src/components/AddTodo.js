import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
