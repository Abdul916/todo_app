import React from 'react';
import TodoProvider from './context/TodoContext';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

const App = () => {
  return (
    <TodoProvider>
      <div className="app-container">
        <h1>Todo List App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
