import styled from "styled-components";
import px2vw from "../utils/px2vh";

export const MobileHeaderContainer = styled.header`
  #menu-icon {
    height: ${px2vw(65)};
    width: ${px2vw(65)};
    position: absolute;
    display: flex;
    justify-content: flex-start;
    margin: ${px2vw(24)};
    transition: 0.3s ease-in;
    cursor: pointer;
    @media (min-width: 500px) {
      display: none;
    }
  }
`;

export const Container = styled.section`
  @media (min-width: 500px) {
    display: none;
  }
  
  position: absolute;
  width: ${px2vw(270)};
  height: 100%;
  left: 2;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 3px 0px 9px rgba(0, 0, 0, 0.15);
  border-radius: 0px 24px 24px 0px;
  background-color: white;
  .nav-hide {
    transform: translateX(-100%);
  }
  .nav-active {
    transform: translateX(0%);
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${px2vw(70)};
  padding: ${px2vw(25)};
  font-size: ${px2vw(20)};

  .logo {
    height: ${px2vw(65)};
    width: ${px2vw(65)};
  }
  a {
    color: #242424;
    cursor: pointer;
  }
`;
