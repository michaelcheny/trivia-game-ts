import styled, { createGlobalStyle } from "styled-components";

import BG from "./images/scroll.png";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body {
    /* border: 3px pink solid; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #615e59;
  }

  * {
    box-sizing: border-box;
    font-family: 'MedievalSharp', cursive;
    font-size: 26px;
  }
`;

export const MainWrapper = styled.div`
  background-image: url(${BG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px green solid;
  /* max-height: 100%; */
  max-width: 1200px;
  height: 100vh;
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: auto 0; */
  align-self: center;
  border: 1px red solid;
  height: 62%;
  width: 58%;
  max-width: 760px;
  max-height: 62%;
  margin-bottom: 4rem;

  > p {
    color: #ff0;
  }

  .score {
    color: #fff;
    font-size: 1rem;
    margin: 0;
  }

  h1 {
    font-family: "MedievalSharp", cursive;
    color: #1d0f0b;
    filter: drop-shadow(3px 2px #796d5d);
    font-size: 5vh;
    font-weight: 500;
    text-align: center;
    margin-top: 3rem;
  }

  .start,
  .next {
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 10px;
    transition: 300ms;
    background: #baae97;
    color: #796d5d;
    &:hover {
      background: #615e59;
      color: #e9ddcb;
      transform: scale(1.1);
    }
  }

  .next {
    margin-top: 2rem;
  }
`;
