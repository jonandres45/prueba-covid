import React from 'react';
import imageCovid from '../assets/images/covid.png';
import './Presentacion.scss';

function Presentacion(){

    return(
        <div className='fondoPresentacion' id="inicio">
            <div className='contenidoPresentacion'>
                <h1>Covid-19 en todo el mundo</h1>
                <h1 style={{color:"red"}}>Los servicios de la API ya no traen todos los datos :( lo siento</h1>
                <img src={imageCovid} alt="covid" className='img-covid'></img>
            </div>
        </div>
    );
}

export {Presentacion};