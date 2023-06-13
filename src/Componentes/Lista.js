import React, { useEffect, useState } from 'react';
import addIcon from '../assets/add.png';
import lixoIcon from '../assets/lixo.png';

export const Lista = () => {

    const [lista, setLista] = useState([]);
    const [input, setInput] = useState('');

    //INSERIR VALOR DIGITADO NUMA VARIAVEL
    const handleInput = (event) => {
        setInput(event.target.value);
    };

    //INSERIR VALOR DA VARIAVEL NA ARRAY
    const handleLista = ()=>{
        if (input.trim() !== '') {
            setLista([...lista, input]);
            setInput('');
        }
    }

    //DELETER VALOR DO INDICE DA ARRAY 
    const handleDelete = (index)=> {
        const atualizarLista = lista.filter((_, i) => i !== index);
        setLista(atualizarLista);
    }

    return (
        <div className='lista'>
            <ul>
                {lista.map((todo, index) => (
                    <div className='item'>
                        <li key={index}>· {todo}</li>
                        <button onClick={() => handleDelete(index)}><img src={lixoIcon}/></button>
                    </div>
                ))}               
            </ul>
            <div className='input-add'>
                <input
                    type='text'
                    value={input}
                    placeholder='Escreva aqui...'
                    onChange={handleInput}
                />
                <button onClick={handleLista}><img src={addIcon}/></button>
            </div>
        </div>
    )
}
