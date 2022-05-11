import React from "react";
import styled from "styled-components";
import {MdMenu} from "react-icons/md";

function MenuHamburguesa({ abrir, handleClick }) {
  const MenuButtonContainer = styled.button`
    border: none;
    font-size: 2rem;
    margin-right:15px;
    box-shadow: 0px 0px 1px rgb(50, 50, 50);
    margin-top: 1.3rem;
    @media only screen and (min-width: 600px) {
      display: none;
    }
  `;
  return !abrir ? (
    <MenuButtonContainer onClick={handleClick}>
      <MdMenu/>
    </MenuButtonContainer>
  ) : (
    ""
  );
}

export {MenuHamburguesa};