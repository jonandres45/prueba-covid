import React from 'react';
import { Presentacion } from '../Presentacion';
import { Header } from '../Header';
import { Casos } from '../Casos';
import { Historial } from '../Historial';
import { Vacunados } from '../Vacunados';

function App() {
  return (
    <React.StrictMode>
      <Header/>
      <Presentacion/>
      <Casos/>
      <Historial/>
      <Vacunados/>

    </React.StrictMode>
  );
}

export default App;