import React, { Component } from "react";
import axios from "axios";
import * as S from "./styled.js";
import Logo from "./Logo.png";

const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});

class App extends Component {
  state = {
    informacoes: []
  };

  componentDidMount() {
    this.Personagem();
  }

  Personagem = async () => {
    const resposta = await Api.get();

    console.log(resposta.data.results);

    const itens = resposta.data.results.map((item) => {
      return {
        ...item
      };
    });

    this.setState({
      informacoes: itens
    });
  };

  render() {
    return (
      <S.Container>
        <S.GlobalStyle />
        <S.BoxLogo>
          <img src={Logo} alt="Logo Rick an Morty" />
        </S.BoxLogo>

        <h1> Conheça os personagens da série Ricky and Morty:</h1>

        {this.state.informacoes.map((item) => (
          <S.Box>
            <img src={item.image} alt="" />
            <h2> {item.name} </h2>
          </S.Box>
        ))}
      </S.Container>
    );
  }
}
export default App;
