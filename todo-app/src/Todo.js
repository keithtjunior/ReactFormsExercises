import React, {useState} from 'react';

const Todo = ({id, idx, todo, editTodo, deleteTodo}) => {
    const [formData, setFormData] = useState({todo});
    const [editing, setEditing] = useState(false);

    const handleEdit = () => {
        setEditing(!editing);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo({ ...formData, id });
        setEditing(false);
    }

    return (
        <div style={{display: 'flex', margin: '1rem'}}>
            {editing ? 
                <form aria-label="edit-todo-form" onSubmit={handleSubmit}>
                    <label htmlFor="todo" hidden>Edit: </label>
                    <input
                        aria-label="edit-todo-input"
                        id="todo"
                        type="text"
                        minLength={1}
                        maxLength={72}
                        name="todo"
                        required
                        style={{marginRight: '1rem'}}
                        value={formData.todo}
                        onChange={handleChange}
                    />
                </form> :
                <div style={{marginRight: '1rem'}}>{idx+1}. <span>{todo}</span></div>
            }
            <div style={{
                    color: editing ? 'red' : 'blue',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    userSelect: 'none',
                    marginRight: '1rem'}} 
                onClick={() => handleEdit(id)}>{editing ? 'Cancel' : 'Edit'}</div>
            <button 
                style={{
                    color: 'white', 
                    backgroundColor: 'red',
                    cursor: 'pointer'}}
                onClick={() => deleteTodo(id)}>X</button>
        </div>
    )
}

export default Todo;