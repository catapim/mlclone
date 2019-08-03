import React, {Component}  from 'react';

class Greeting extends Component {
    
    formatUsername(firstName,lastName){
        return `${firstName} ${lastName}`;
    }

    render(){
        return (
            <h1 style={this.props.h1Style}>
                hola soy greeting, {this.formatUsername(this.props.firstName,this.props.lastName)}!
            </h1>
        )
    }
}
export default Greeting;