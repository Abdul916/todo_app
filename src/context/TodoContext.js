import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    //   const API_BASE_URL = 'http://localhost:8000/api';
    const API_BASE_URL = 'http://localhost/react_apis/api';

    // Fetch todos
    const fetchTodos = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/get_todo_lists`);
            console.log(response.data.data);
            setTodos(response.data.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        } finally {
            setLoading(false);
        }
    };

    // Add a new todo
    const addTodo = async (title) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/add_new_todo_list`, { title });
            // setTodos([...todos, response.data]);
            fetchTodos();
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };
    const addTodo2 = async (title) => {
        try {
            const response = await fetch(`${API_BASE_URL}/add_new_todo_list`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title })
            });
            const data = await response.json();
            setTodos((prevTodos) => [...prevTodos, data]);
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };
    
    // Update a todo
    const updateTodo = async (id, title) => {
        try {
            await axios.post(`${API_BASE_URL}/update_todo_list`, { id, title });
            fetchTodos(); // Refresh the list
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    // Update status
    const toggleStatus = async (id, status) => {
        try {
            await axios.post(`${API_BASE_URL}/update_status`, { id, status });
            fetchTodos(); // Refresh the list
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    // Delete a todo
    const deleteTodo = async (id) => {
        try {
            await axios.post(`${API_BASE_URL}/destroy_todo_list`, { id });
            // setTodos(todos.filter((todo) => todo.id !== id));
            fetchTodos();
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <TodoContext.Provider value={{ todos, loading, addTodo, updateTodo, toggleStatus, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
