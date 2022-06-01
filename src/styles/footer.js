import styled from "styled-components";
import background from "../assets/footer-cover.jpg";

export const FooterContainer = styled.footer`
  background-image: url(${background});
  background-position: bottom;
  background-size: cover;
  width: 100%;
  height: 500px;
    bottom: 0;
  margin-top: 200px;
  left: 0;
  
`;

export const TextContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Nunito:wght@200&display=swap');
font-family: 'Montserrat', sans-serif;
padding: 30px 60px;
  h1 {
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 56px;
line-height: 150%;
  }
  p {
    font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 200%;
    
  }
  .contente::before{
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
  gap: 36px;
  color: #EBEFF2;
  flex-direction: column;
  justify-content: flex-end;
  gap: 36px;
  color:#EBEFF2;
  left: 50%;

button{display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 96px;
margin-top: 30px;
gap: 10px;
border: 1px solid #EBEFF2;
border-radius: 4px;
background-color: Transparent;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 200%;
color: #EBEFF2;
}
`;
