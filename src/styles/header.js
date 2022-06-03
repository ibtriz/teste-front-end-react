import styled from "styled-components";
import background from "../assets/background-car.png";
import px2vw from "./utils/px2vh";

export const HeaderContainer = styled.header`
 background-image: url(${background});
  background-position: top;
  background-size: cover;
  width: 100%;
  height: ${px2vw(772)};
  top: 0;
  border-bottom: ${px2vw(100)};
  a {
    color: #fff;
  }
  margin-bottom: ${px2vw(100)};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: ${px2vw(65)};
    cursor: pointer;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${px2vw(200)};
`;

export const LoginOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${px2vw(35)};
  margin-right: ${px2vw(50)};
`;
