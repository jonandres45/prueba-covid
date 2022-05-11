import React from 'react';
import './Header.scss';
import {Navbar} from './Navbar';
import {MenuHamburguesa} from './MenuHamburguesa';
function Header(){
    const [abrir, setAbrir] = React.useState(false);

    const handleClick = () => {
        setAbrir(!abrir);
    };
    return(
        <header>
            <Navbar abrir={abrir} handleClick={handleClick}/>
            <MenuHamburguesa abrir={abrir} handleClick={handleClick}/>
        </header>
    )
}

export {Header};