import React, { useState } from 'react'

function ColorBlock(props) {
    let [input, setInput] = useState (' ')
    
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

export default ColorBlock