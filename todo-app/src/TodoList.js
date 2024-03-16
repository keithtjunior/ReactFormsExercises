import React, {useState} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    const INITIAL_STATE = []
    const [todos, setTodos] = useState(INITIAL_STATE);
    
    const makeTodo = (todo) => {
        setTodos(todos => [...todos, {
            id: todo.id,
            todo: todo.todo.trim()
        }])
    }
    const editTodo = (todo) => {
        setTodos(todos => {
            const todosCopy = [...todos];
            const idx = todosCopy.findIndex(t => t.id === todo.id)
            todosCopy[idx] = {
                ...todos[idx],
                todo:todo.todo.trim()
            };
            return todosCopy;
        });
    }
    const deleteTodo = (id) => {
        const newTodos = [...todos];
        newTodos.splice(newTodos.findIndex(todo => id === todo.id), 1);
        setTodos(newTodos);
    }

    return (
        <div>
            <NewTodoForm makeTodo={makeTodo}/>
            {todos.map((todo, idx) => (
                <Todo 
                key={todo.id}
                id={todo.id}
                idx={idx}
                todo={todo.todo}
                editTodo={editTodo}
                deleteTodo={deleteTodo}/>
            ))}
        </div>
    )
}

export default TodoList;