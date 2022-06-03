import {
  Container,
  Nav,
  MobileHeaderContainer,
} from "../../styles/mobile/Mobilecontainer.js";
import logoMobile from "../../assets/logo-mobile.png";
import { useState } from "react";
import menuIcon from "../../assets/menu-icon.png";

function MobileMenu() {
  const [active, setActive] = useState("nav-hide");
  const OpenNav = () => {
    if (active === "nav-hide") {
      setActive("nav-hide nav-active");
    } else setActive("nav-hide");
  };
  return (
    <MobileHeaderContainer>
      <img
        alt="menu-icon"
        id="menu-icon"
        src={menuIcon}
        onClick={OpenNav}
      ></img>
      <Container className={active}>
        <Nav>
          <img class="logo" src={logoMobile} alt="logo"></img>
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#tabela">Tabela</a>
          <a href="#faleconosco">Fale Conosco</a>
        </Nav>
      </Container>
    </MobileHeaderContainer>
  );
}

export default MobileMenu;
