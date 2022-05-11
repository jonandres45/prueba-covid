import React from 'react';
import { useSelector } from 'react-redux';

function Vacunados(){
    let valor = useSelector((state)=> state.covid.vaccines);
    return(
        <div style={{textAlign:'center'}}>
            <h2>Total de vacunados con dosis completa a la fecha: {valor.updated}</h2>
            <h1>{valor.people_vaccinated}</h1>
        </div>
    );
}

export {Vacunados};