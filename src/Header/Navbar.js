import React from "react";
import { NavbarContainer } from "./styles/NavbarContainer";

function Navbar({ abrir, handleClick }) {
  return (
    <NavbarContainer abrir={abrir}>
      <a href="#buscador">
        <button className='btnPresentacion' onClick={handleClick}>Información por pais</button>
      </a>
      <a href="https://coronavirus.gob.mx/">
        <button className='btnPresentacion'>Información oficial Méx.</button>
      </a>                
        {abrir ? (<button className='btnCerrar' onClick={handleClick}>Cerrar</button>) : ""}
        
    </NavbarContainer>
  );
}

export {Navbar};
