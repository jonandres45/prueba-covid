import { createSlice } from '@reduxjs/toolkit';
import API from '../../api/api-covid.js';

export const covidHistorySlice = createSlice({
    name: 'covidHistory',
    initialState:{
        history:"",
        cases:"",
        vaccines:"",
        showSpinner: false,
    },
    reducers:{        
        setCases: (state, action)=>{
            state.cases = action.payload;
        },
        setHistory: (state, action)=>{
            state.history = action.payload;
        },
        setVaccines: (state, action)=>{
            state.vaccines = action.payload;
        },
        handleSpinner: (state)=>{
            state.showSpinner = !state.showSpinner;
        }
    }
});

export const {setCases, setHistory, setVaccines, handleSpinner} = covidHistorySlice.actions;
export default covidHistorySlice.reducer;

export const fetchCases = (pais)=>(dispatch)=>{    
    dispatch(setCases(""));
    dispatch(handleSpinner());
    API.get(`/cases?country=${pais}`)
    .then((response)=>{
        dispatch(setCases(response.data.All));
        dispatch(handleSpinner());
    })
    .catch((error)=>console.log(error));
}

export const fetchHistory = (pais)=>(dispatch)=>{    
    dispatch(handleSpinner());
    dispatch(setHistory(""));
    API.get(`/history?country=${pais}&status=confirmed`)
    .then((response)=>{
        dispatch(handleSpinner());
        dispatch(setHistory(response.data.All.dates));
    })
    .catch((error)=>console.log(error));
}

export const fetchVaccines = (pais)=>(dispatch)=>{
    dispatch(handleSpinner());
    dispatch(setVaccines("")); 
    API.get(`/vaccines?country=${pais}`)
    .then((response)=>{
        dispatch(handleSpinner());
        dispatch(setVaccines(response.data.All));
    })
    .catch((error)=>console.log(error));
}