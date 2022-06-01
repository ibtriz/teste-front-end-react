import styled from "styled-components";
import px2vw from "./utils/px2vh";

export const CardsSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  #chevron-left {
    width: ${px2vw(40)};
    height: ${px2vw(70)};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: ${px2vw(10)};
    margin: ${px2vw(5)};
  }

  #chevron-rigth {
    width: ${px2vw(40)};
    height: ${px2vw(70)};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: ${px2vw(10)};
    margin: ${px2vw(5)};
  }

  .container-cars {
    padding: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-content: space-between;
    gap: ${px2vw(80)};
    box-sizing: content-box;
  }

  .card-car .car-img {
    position: absolute;
    transform: translateY(-125%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: ${px2vw(260)};
    height: ${px2vw(170)};
    margin: 0;
  }

  .card-car h3 {
    margin-top: ${px2vw(50)};
    padding-top: 0;
    padding: ${px2vw(2)};
    display: flex;
    justify-content: center;
  }

  .card-car {
    box-sizing: content-box;
    border: ${px2vw(1)} solid #1d2527;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: ${px2vw(24)};
    width: ${px2vw(281)};
    height: ${px2vw(362)};
    margin-left: ${px2vw(24)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: ${px2vw(40)};
  }
  .card-car span {
    display: flex;
    flex-direction: row;
    width: ${px2vw(145)};
    align-items: center;
    margin-top: ${px2vw(25)};
    margin-left: ${px2vw(5)};
  }
  .card-car .icon {
    margin-right: ${px2vw(30)};
    height: ${px2vw(25)};
    width: ${px2vw(25)};
  }

  .buttom-see-car {
    font-size: ${px2vw(19)};
    border: 1px solid #1d2527;
    border-radius: ${px2vw(21)};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${px2vw(8)} ${px2vw(72)};
    gap: ${px2vw(10)};
    width: ${px2vw(217)};
    height: ${px2vw(48)};
    cursor: pointer;
    margin-top: ${px2vw(10)};
  }
`;
