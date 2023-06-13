import React from 'react';
import userFoto from './assets/user.png';
import lua from './assets/lua.png';
import sol from './assets/sol.png';
import './App.css';
import { Lista } from './Componentes/Lista';

function App() {
  return (
    <>
    <div className="App">
      <div className='container'> 
        <div className='content'>
          <div className='aba-esquerda'>
            <img src={userFoto} width={200}/>
            <h1 className='nome-user'>Bruno Menezes</h1>
            <p className='bio-user'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <ul className='links-user'>
              <li><a href='#'>Link 1</a></li>
              <li><a href='#'>Link 2</a></li>        
              <li><a href='#'>Link 3</a></li>        
              <li><a href='#'>Link 4</a></li>
            </ul>
          </div>
          <div className='aba-direita'>
            <h1 className='titulo'>Lista de Tarefas</h1>
            <div className='tarefas-container'>
              <div className='lista-dia'>
                <h2>Dia</h2>
                <Lista />
              </div>
              <div className='lista-noite'>
                <h2>Noite</h2>
                <Lista />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </> 
  );
}

export default App;
