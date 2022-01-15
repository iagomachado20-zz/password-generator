import './App.css';
import React from 'react';
import { ControlsComponent, HeadingComponent, PasswordDisplayComponent } from './components';

function App() {
  return (
    <div className="App">
      <HeadingComponent
        description="Crie senhas utilizando letras, números e caracteres especiais" 
        title="Gerador de Senha"/>
      <PasswordDisplayComponent/> 
      <ControlsComponent/>
    </div>
  );
}

export default App;
