import styled from "styled-components";
import background from "../assets/footer-cover.jpg";
import px2vw from "./utils/px2vh";

export const FooterContainer = styled.footer`
  background-image: url(${background});
  background-position: bottom;
  background-size: cover;
  width: 100%;
  height: ${px2vw(500)};
  bottom: 0;
  margin-top: ${px2vw(80)};
`;

export const TextContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Nunito:wght@200&display=swap");
  font-family: "Montserrat", sans-serif;
  padding: ${px2vw(30)} ${px2vw(60)};
  h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: ${px2vw(56)};
    line-height: 150%;
  }
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: ${px2vw(20)};
    line-height: 200%;
  }
  .contente::before {
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -o-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: blur(15px);
  }
  float: right;
  display: flex;
  width: 50%; /* largura do box */
  flex-direction: column;
  justify-content: flex-end;
  gap: ${px2vw(36)};
  color: #ebeff2;
  flex-direction: column;
  justify-content: flex-end;
  color: #ebeff2;
  left: 50%;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${px2vw(8)} ${px2vw(96)};
    margin-top: ${px2vw(30)};
    gap: ${px2vw(10)};
    border: ${px2vw(1)} solid #ebeff2;
    border-radius: ${px2vw(4)};
    background-color: Transparent;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: ${px2vw(16)};
    line-height: 200%;
    color: #ebeff2;
  }
`;
