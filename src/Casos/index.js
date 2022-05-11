import React from 'react';
import './Casos.scss';
import { useDispatch } from 'react-redux';
import {fetchHistory} from "../features/covid/covidHistorySlice";

function Casos(){    
    const dispatch = useDispatch();
    const [result, setResult]= React.useState([]);
    let searchedResult = [];
    const paises = [
        {nombre: "Mexico"},
        {nombre: "Albania"},
        {nombre: "Moldova"},
        {nombre: "Monaco"},
        {nombre: "Mongolia"},
        {nombre: "Chile"},
        {nombre: "Colombia"},
    ]

    const onSearchcountry = (event)=>{
        const data = event.target.value;
        if(data.length >= 1){
            searchedResult = paises.filter(pais =>{
                const paisText = pais.nombre.toLowerCase();
                const searchText = data.toLocaleLowerCase();
                return paisText.includes(searchText);
            });
            setResult(searchedResult);
        }else{
            setResult([]);
        }
    }

    const getPais = (nombre)=>{        
        dispatch(fetchHistory(nombre));
        setResult([]);
    }

    return (
        <React.StrictMode>
            <h1 className='title'>Buscar un pais en concreto</h1>
            <div className='contenedorBuscador'>
                <input 
                    type="text" 
                    placeholder='Introduzca el nombre de un pais' 
                    onChange={onSearchcountry}
                    
                ></input>
            </div>
            <div className='opciones'>
                {result.map(item=>(
                    <div key={item.nombre}>
                        <button 
                            className='paisOpcion'
                            onClick={()=> getPais(item.nombre)}                           
                        >{item.nombre}</button><br/>
                    </div>
                ))};
            </div>
            <div className='contenedorResultado'>
                <div style={{textAlign:'center'}}>
                    <h2>Confirmados</h2>
                    <p>2110</p>
                </div>
                <div style={{textAlign:'center'}}>
                    <h2>Recuperados</h2>
                    <p>2110</p>
                </div>
                <div style={{textAlign:'center'}}>
                    <h2>Muertos</h2>
                    <p>2110</p>
                </div>
            </div>
        </React.StrictMode>
    );
}

export {Casos};