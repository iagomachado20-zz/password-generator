import './App.css';
import React from 'react';
import { HeadingComponent } from './components';

function App() {
  return (
    <div className="App">
      <HeadingComponent
        description="Crie senhas utilizando letras, números e caracteres especiais" 
        title="Gerador de Senha"/>
    </div>
  );
}

export default App;
