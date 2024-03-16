import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({makeTodo}) => {
    const INITIAL_STATE = { todo: '' }
      const [formData, setFormData] = useState(INITIAL_STATE);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
          ...formData,
          [name]: value
        }));
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        makeTodo({ ...formData, id:uuid() });
        setFormData(INITIAL_STATE);
      }
    
      return (
        <div style={{margin: '2rem'}}>
            <form aria-label="new-todo-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="todo">Todo: </label>
                    <input
                        aria-label="new-todo-input"
                        id="todo"
                        type="text"
                        minLength={1}
                        maxLength={72}
                        name="todo"
                        placeholder="Enter a new todo"
                        required
                        value={formData.todo}
                        onChange={handleChange}
                    />
                </div>
            <button>Add Todo</button>
            </form>
        </div>
      )
}

export default NewTodoForm;