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
  }

  * {
    box-sizing: border-box;
    font-family: 'MedievalSharp', cursive;
  }
`;

export const MainWrapper = styled.div`
  background-image: url(${BG});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px green solid; */
  height: 100vh;
  width: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: auto 0; */
  align-self: center;
  border: 1px red solid;
  height: 62vh;
  width: 58vh;
  margin-bottom: 6rem;

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
    /* background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text; */
    /* --webkit--moz-background-clip: text;
    --webkit--webkit-text-fill-color: transparent;
    --moz-background-clip: text;
    --moz--webkit-text-fill-color: transparent; */
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }
`;
