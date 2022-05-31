import { createGlobalStyle } from "styled-components";
import px2vw from "./utils/px2vh";

export const Global = createGlobalStyle`
  * {
    margin: 0;
	padding: 0;
	border: 0;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }

:root {
    font-size: ${px2vw(24)};

    @media (min-width: 360px) {
      font-size: ${px2vw(18)};
    }
  }
`;