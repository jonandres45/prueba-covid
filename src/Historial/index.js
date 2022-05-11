import React from 'react';
import {useSelector} from 'react-redux';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import './Historial.scss';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
)



const options = {
    responsive: true,
    scales:{
        y:{
            min:0
        },
    },
};

function Historial(){
    let scores = [0];
    let labels = [0];
    let valor = useSelector((state)=> state.covid.history);
    
    for(const property in valor){
        scores.push(valor[property]);
        labels.push(property);        
    }

    let data = {
        datasets:[
            {
                label:'Contagios',
                data: scores,
                tension: 0.3,
                borderColor: "rgb(21, 30, 60)",
            }
        ],
        labels,            
    };

    return (
        <div className='containerCovid'>
            <h2>Grafica de contagios desde inicio de pandemia</h2>
            <Line data={data} options={options}></Line>
        </div>
    );    
}

export {Historial};