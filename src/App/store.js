import { configureStore } from "@reduxjs/toolkit";
import covidReducer from '../features/covid/covidHistorySlice';

export default configureStore({
    reducer:{
        covid: covidReducer,
    }
})