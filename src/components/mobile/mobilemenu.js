import { Container, Nav } from "../../styles/mobile/Mobilecontainer.js";
import logoMobile from "../../assets/logo-mobile.png";

function MobileMenu() {
  return (
    <Container>
      <Nav>
        <img class="logo" src={logoMobile} alt="logo"></img>
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#tabela">Tabela</a>
        <a href="#faleconosco">Fale Conosco</a>
      </Nav>
    </Container>
  );
}

export default MobileMenu;
