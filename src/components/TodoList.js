import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, loading } = useContext(TodoContext);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  if (!todos.length) {
    return <p>No tasks available. Add a new one!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
