import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const INITIAL_STATE = []
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    
    const createBox = (box) => {
        setBoxes(boxes => [...boxes, box])
    }
    const deleteBox = (id) => {
        const newBoxes = [...boxes];
        newBoxes.splice(newBoxes.findIndex(box => id === box.id), 1);
        setBoxes(newBoxes);
    }

    return (
        <div>
            <NewBoxForm createBox={createBox}/>
            {boxes.map(box => (
                <Box 
                key={box.id}
                id={box.id}
                width={box.width} 
                height={box.height} 
                color={box.color}
                deleteBox={deleteBox}/>
            ))}
        </div>
    )
}

export default BoxList;