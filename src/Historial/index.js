import React, {useMemo} from 'react';
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

const scores = [0];
const labels = [0];

const options = {
    responsive: true,
    scales:{
        y:{
            min:0
        },
    },
};

function Historial(){
    const valor = useSelector((state)=> state.covid.history);
    
    for(const property in valor){
        scores.push(valor[property]);
        labels.push(property);
        console.log(`${property}: ${valor[property]}`);
    }
    
    const data = useMemo(function(){        
        return{
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
    }, []);

    return (
        <div className='containerCovid'>
            
            <Line data={data} options={options}></Line>
        </div>
    );    
}

export {Historial};