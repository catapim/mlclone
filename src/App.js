import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
// al imoportar luego de from va la ruta
import Avatar from './components/Avatar';
import Greeting from './components/Greeting';

const user = {
    firstName: "catalina",
    lastName: "pim",
    avatar: 'https://i.pinimg.com/originals/3e/f2/ee/3ef2eed0fa4f1b5b0e3e00c3330b44bb.jpg',
};


//se mueve a greeting.js
// const getGreeting = (user) => {
//     if (user) {
//         return <h1>HOla catalina</h1>
//     }
//     return <h1>hola invitado</h1>
// }

class App extends Component {
  render() {
    return (
      <div className="App">

        
       
        
        <Greeting h1Style={{backgroundColor: 'yellow'}} 
        firstName={user.firstName}
        lastName={user.lastName}
        />
        <Avatar picture={user.avatar} />
      </div>
    );
  }
}

export default hot(module)(App);
