import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({createBox}) => {
    const INITIAL_STATE = {
        width: 1,
        height: 1,
        color: ''
      }
      const [formData, setFormData] = useState(INITIAL_STATE);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
          ...formData,
          [name]: value
        }))
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        createBox({ ...formData, id:uuid() });
        setFormData(INITIAL_STATE)
      }
    
      return (
        <div style={{margin: '2rem'}}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="width">Width</label>
                    <input
                        id="width"
                        type="number"
                        min={1}
                        max={1420}
                        name="width"
                        required
                        value={formData.width}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="height">Height</label>
                    <input
                        id="height"
                        type="number"
                        min={1}
                        max={1420}
                        name="height"
                        required
                        value={formData.height}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <input
                        id="color"
                        type="text"
                        minLength={1}
                        maxLength={25}
                        name="color"
                        placeholder="Enter color of box"
                        required
                        value={formData.color}
                        onChange={handleChange}
                    />
                </div>
            <button>Create Box</button>
            </form>
        </div>
      )
}

export default NewBoxForm;