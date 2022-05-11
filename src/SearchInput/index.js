import React from "react";
import { useDispatch } from 'react-redux';
import {fetchCases, fetchHistory, fetchVaccines} from "../features/covid/covidHistorySlice";
import './SearchInput.scss';

function SearchInput(){
    const dispatch = useDispatch();
    const [result, setResult]= React.useState([]);
    const [paisSeleccionado, setPaisSeleccionado] = React.useState("");
    let searchedResult = [];
    const paises = [
        {nombre: "Mexico"},
        {nombre: "Albania"},
        {nombre: "Moldova"},
        {nombre: "Andorra"},
        {nombre: "Argentina"},
        {nombre: "Estonia"},
        {nombre: "Monaco"},
        {nombre: "Mongolia"},
        {nombre: "Chile"},
        {nombre: "Colombia"},
        {nombre: "Germany"},
        {nombre: "Iran"},
        {nombre: "Panama"},
        {nombre: "Spain"},
        {nombre: "Venezuela"},
        {nombre: "Vietnam"},
        {nombre: "Japan"},
        {nombre: "Nepal"},
        
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

    const getPais = async (nombre)=>{
        setPaisSeleccionado(nombre);
        dispatch(fetchCases(nombre));
        dispatch(fetchHistory(nombre));        
        dispatch(fetchVaccines(nombre));
        setResult([]);
    }
    return(
        <React.StrictMode>
            <div className="contenedorSearch" id="buscador">            
                <h1 className='title'>Buscar un pais en concreto</h1>
                <div className='contenedorBuscador'>
                    <input 
                        type="text" 
                        placeholder='Introduzca el nombre y seleccione un pais disponible' 
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
                <h1 style={{textAlign:'center', paddingTop:"2rem"}}>{paisSeleccionado}</h1>                
            </div>
        </React.StrictMode>
    );
}

export {SearchInput};