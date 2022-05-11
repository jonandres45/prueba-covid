import React from 'react';
import './Casos.scss';
import { useSelector } from 'react-redux';

function Casos(){        
    let valor = useSelector((state)=> state.covid.cases);
    return (
        <React.StrictMode>            
            <div className='contenedorResultado'>
                <div style={{textAlign:'center'}}>
                    <h2>Confirmados</h2>
                    <p>{valor.confirmed}</p>
                </div>
                <div style={{textAlign:'center'}}>
                    <h2>Recuperados</h2>
                    <p>{valor.recovered === 0 ? "No hay dato disponible de este pais en la API" : valor.recovered}</p>
                </div>
                <div style={{textAlign:'center'}}>
                    <h2>Muertes</h2>
                    <p>{valor.deaths}</p>
                </div>
            </div>
        </React.StrictMode>
    );
}

export {Casos};