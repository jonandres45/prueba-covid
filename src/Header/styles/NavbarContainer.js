import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 10vh;
  background: #151D3B;
  right: ${props => (props.abrir ? "0" : "-100%")};
  width: 100%;
  height: 90vh;
  transition: right 0.3s linear;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
  }

  a {
    padding: 0.5rem 0.8rem;
    color: grey;
    text-decoration: none;
  }
`;
