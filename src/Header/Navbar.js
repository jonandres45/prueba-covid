import React from "react";
import { NavbarContainer } from "./styles/NavbarContainer";

function Navbar({ abrir, handleClick }) {
  return (
    <NavbarContainer abrir={abrir}>
        <button className='btnPresentacion'>Información por pais</button>
        <button className='btnPresentacion'>Información oficial Méx.</button>
        {abrir ? (<button className='btnCerrar' onClick={handleClick}>Cerrar</button>) : ""}
        
    </NavbarContainer>
  );
}

export {Navbar};
