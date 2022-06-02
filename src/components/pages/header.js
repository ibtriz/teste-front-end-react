import { Fragment } from "react";
import LoginIcon from "../../assets/LoginIcon";
import Logo from "../../assets/logo";
import {
  HeaderContainer,
  LoginOptions,
  Container,
  Menu,
} from "../../styles/header.js";
import MobileMenu from "../mobile/mobilemenu.js";

export function Header() {
  return (
    <Fragment>
      <MobileMenu />
      <HeaderContainer>
        <Container>
          <div className="logo">
            <Logo />
          </div>
          <Menu>
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#tabela">Tabela</a>
            <a href="#faleconosco">Fale Conosco</a>
          </Menu>

          <LoginOptions>
            <a href="#entrar">Entrar</a>
            <LoginIcon />
          </LoginOptions>
        </Container>
      </HeaderContainer>
    </Fragment>
  );
}
