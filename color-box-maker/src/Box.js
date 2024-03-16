import React from 'react';

const Box = ({id, width, height, color, deleteBox}) => {
    return (
        <div style={{margin: '1rem'}}>
            <button 
                style={{cursor: 'pointer'}}
                onClick={() => deleteBox(id)}>X</button>
            <div style={{
                width: `${width}px`, 
                height: `${height}px`,
                backgroundColor: color}}>
            </div>
        </div>
    )
}

export default Box;