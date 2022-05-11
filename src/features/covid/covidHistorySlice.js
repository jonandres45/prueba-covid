import { createSlice } from '@reduxjs/toolkit';
import API from '../../api/api-covid.js';

export const covidHistorySlice = createSlice({
    name: 'covidHistory',
    initialState:{
        value:[],
        value2:0,
        history:[],
    },
    reducers:{
        increment: (state)=>{
            state.value++;
        },
        increment2: (state)=>{
            state.value2++;
        },
        setHistory: (state, action)=>{
            state.history = action.payload;
        },
        eje:(state, action)=>{
            console.log(state.value);
            console.log(action.payload);
        }
    }
});

export const {increment, increment2, ejem, setHistory} = covidHistorySlice.actions;
export default covidHistorySlice.reducer;

export const fetchHistory = (pais)=>(dispatch)=>{    
    API.get(`/history?country=${pais}&status=confirmed`)
    .then((response)=>{
        dispatch(setHistory(response.data.All.dates));
    })
    .catch((error)=>console.log(error));
}