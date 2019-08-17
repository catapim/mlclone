import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import axios from 'axios';
import List from '../components/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  componentDidMount(){
    
  }
  /*
    Actividad Nº 2
    - Crear buscador de productos utilizando la api de Mercado Libre
    - usar Axios para hacer una llamada a https://api.mercadolibre.com/sites/MLC/search?q={query}
    - Donde query es obtenido por medio input de tipo text (componente controlado)
    - Tomar los items de los resultados de busqueda y guardar en el state items
    - Pintar los resultados de busqueda como una lista.
    - Utiliza como ejemplo el formato de los rows de los resultados de busqueda (https://listado.mercadolibre.cl/iphone)
    - Cada fila debe contener imagen del producto, titulo y precio
    - Agregar dentro del .nav-header el logo (https://http2.mlstatic.com/ui/navigation/4.5.0/mercadolibre/logo__large_plus@2x.png)
  */

  render() {
    const {items} = this.state;
    return (
      <div className="App">
        <div className="nav-header">
          { /* Aqui formulario buscador */ }
        </div>
        <List></List>

        <form>
            <label>
              Product: 
            </label>
            <input type="text" placeholder="write product here">
            </input>
            <button>
              Search
            </button>
        </form>        

        {/* items.map(item => (<TuComponenteFila />)) */}
        
      </div>
    );
  }
}

export default hot(module)(App);