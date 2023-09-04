import React, { useState } from 'react';

function ToDoList() {
const [itens, setItens] = useState([]);
const [inputValue, setInputValue] = useState('');
const addItens = ( ) => {
    if(inputValue.trim() !== '') {
        setItens([...itens, inputValue])
        setInputValue('');
    }

    }
    const removeItem = (index) => {
        const newArray = [...itens];
        newArray.splice(index, 1);
        setItens(newArray);
}

    return(
        <>
        <div>
            <h1>To do list</h1>
        <div>
            <input type="text"
            placeholder='Adicione uma tarefa'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ></input>
        </div>
        <button onClick={addItens}>Adicionar Item</button>
        <ul>
            {itens.map((item, index) => 
            <li key={index}>
                {item}
                <button onClick={() => removeItem(index)}>Remove</button>
            </li>

            )}
        </ul>
        </div>
        </>        
    )
}

export default ToDoList;