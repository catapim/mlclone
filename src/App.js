import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
// al imoportar luego de from va la ruta
// import Avatar from './components/Avatar';
// import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Button from './components/Button';

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
  }

  handlerOnClick(){
  }

  incrementaNumero() {
    this.setState ({numeroInicial : this.state.numeroInicial+1});
  }

  decrementaNumero(){
    this.setState ({numeroInicial : this.state.numeroInicial-1});
  }

  render() {
    return (
      <div className="App">        
      <Button></Button>


        <p>{this.state.numeroInicial}</p>
        <button onClick={this.incrementaNumero}>sube numero</button>
        <button onClick={this.decrementaNumero}>baja numero</button>        
      </div>
    );
  }
}

export default hot(module)(App);