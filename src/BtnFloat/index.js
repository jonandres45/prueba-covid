import React, {useState, useEffect, useCallback} from "react";
import { MdUpgrade } from "react-icons/md";
import './BtnFloat.scss';
function BtnFloat(){
    const [y,setY] = useState(document.scrollingElement.scrollHeight);
    const [scrollDirection, setScrollDirection] = useState(false);
    
    const handleNavigation = useCallback((e) => {
        if (y > window.scrollY) {
            setScrollDirection(false);
        } else if (y < window.scrollY) {
            setScrollDirection(true);
        }
        setY(window.scrollY)
      }, [y]);
    
      useEffect(() => {    
        window.addEventListener("scroll", handleNavigation);
        return () => {
          window.removeEventListener("scroll", handleNavigation);
        };
      }, [handleNavigation]);

    return (
        <React.StrictMode>
            {scrollDirection ? (
                <button className="btnUp">
                <a href="#inicio">
                Subir
                <MdUpgrade/>
                </a>
            </button>
            ) : ""}
        </React.StrictMode>
    );
}

export {BtnFloat};