import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  /* @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@1,200;1,300&display=swap'); */
  font-family: 'Titillium Web', sans-serif;

}`;

export const BoxLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10%;
  background-color: white;

  img {
    width: 25em;
  }
`;

export const Container = styled.section`
  height: 100%;
  background-color: #122b2c;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  color: #d8dfe3;
  font-family: "Titillium Web", sans-serif;

  h1 {
    width: 100%;
    text-align: center;
    margin: 5rem;
    font-size: 2.5rem;
    font-weight: 600;
    /* text-transform: uppercase; */
    font-weight: bold;
    color: #b7dbee;
  }
`;

export const Box = styled.div`
  margin: 2rem;
  /* border-radius: 10px 10px 0 0; */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 1.5rem;
    height: 70%;
    border-radius: 50%;
  }

  h2 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
    color: #07abc2;
  }
`;
