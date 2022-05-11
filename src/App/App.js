import React from 'react';
import { Presentacion } from '../Presentacion';
import { Header } from '../Header';
import { Casos } from '../Casos';
import { Historial } from '../Historial';
import { Vacunados } from '../Vacunados';
import { Spinner } from '../Spinner';
import { SearchInput } from '../SearchInput';
import { Footer } from '../Footer';
import { BtnFloat } from '../BtnFloat';
import {useSelector} from 'react-redux';


function App() {
  let {history, cases, vaccines, showSpinner} = useSelector((state)=> state.covid);
  return (
    <React.StrictMode>
      <Header/>
      <Presentacion/>
      <SearchInput/>      
      {(history !== "" && cases!== "" && vaccines!== "" ) ? (
        <div>
          <Casos/>
          <Historial/>
          <Vacunados/>
        </div>
      ) : ""}

      {showSpinner ? (
        <Spinner/>
      ) : ""}
      <Footer/>
      <BtnFloat/>
    </React.StrictMode>
  );
}

export default App;