import LoginIcon from '../../assets/LoginIcon'
import Logo from '../../assets/logo';
import { HeaderContainer, LoginOptions, Container, Menu } from '../../styles/header.js';
import { Fragment } from 'react';


export function Header() {
    return (
      <Fragment>
  <HeaderContainer>
 
    <Container>
    <div className="logo">
      <Logo/>
    </div>
    <Menu>
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#tabela">Tabela</a>
        <a href="#faleconosco">Fale Conosco</a>
    </Menu>

<LoginOptions>
    <a href="#entrar">Entrar</a>
    <LoginIcon/>
    </LoginOptions>
</Container>

  </HeaderContainer>
  </Fragment>
  );
}
