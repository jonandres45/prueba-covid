import React from "react";
import './Spinner.scss';

function Spinner(){
    return (
        <React.StrictMode>
            <div class="spinner"></div>
            <p style={{textAlign:'center'}}>espera un momento, esto puede tardar hasta 3 min</p>
        </React.StrictMode>
    );
}

export {Spinner};