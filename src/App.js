import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
// al imoportar luego de from va la ruta
// import Avatar from './components/Avatar';
// import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Button from './components/Button';
import Greeting from './components/Greeting';

const user = {
    firstName: "catalina",
    lastName: "pim",
    avatar: 'https://i.pinimg.com/originals/3e/f2/ee/3ef2eed0fa4f1b5b0e3e00c3330b44bb.jpg',
};

class App extends Component {

  constructor(props) {
    super(props); {
      this.state = {
        numeroInicial : 0  
      };  
    }

    this.handlerOnClick = this.handlerOnClick.bind(this);
    this.incrementaNumero = this.incrementaNumero.bind(this);
    this.decrementaNumero = this.decrementaNumero.bind(this);
    this.resetNumero = this.numeroInicial=0;

  }

  handlerOnClick(){
  }

  incrementaNumero() {
    this.setState ({numeroInicial : this.state.numeroInicial+1});
  }

  decrementaNumero(){
    this.setState ({numeroInicial : this.state.numeroInicial-1});
  }

  resetNumero() {
    this.setState({
      numeroInicial: 0
    });
  };

  render() {

    const buttonUp = {
      backgroundColor: "pink",
      color: "white",
      padding: "12px",
      textTransform: "uppercase",
      margin: "5px"
    }
    const buttonDown = {
      backgroundColor: "purple",
      color: "white",
      padding: "12px",
      textTransform: "uppercase",
      margin: "5px"
    }
    const buttonReset = {
      backgroundColor: "red",
      color: "white",
      padding: "12px",
      textTransform: "uppercase",
      margin: "5px"
    }
    const numberTarget = {
      fontSize: "23px",
      fontFamily: "sans-serif",
      color: "green"
    }

    return (
      <div className="App">        
        <p style={numberTarget}>{this.state.numeroInicial}</p>
        <button style={buttonUp} onClick={this.incrementaNumero}>sube numero</button>
        <button style={buttonDown} onClick={this.decrementaNumero}>baja numero</button>      
        <button style={buttonReset} onClick={this.resetNumero}>reset</button>  
      </div>
    );
  }
}

export default hot(module)(App);