import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import axios from 'axios';

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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //se pone un query para consultar api
      query: "iphone",
      items: [],
      data: [],
      results: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  //se hace post hacia la api con el query iphone
  handleSearch(){
    let url=`https://api.mercadolibre.com/sites/MLC/search?q=${this.state.query}`
    axios.get(url)
          .then(response => {
          console.info(response);
          console.info(response.data);

          if (response.status == 200) {
            console.log(response.data);
            this.setState({message: 'busqueda OK', results: response.data.results })
          }
        });
        console.log('submit');


      }

      handleSearchInput(event){
        this.setState({product: event.target.value})

      }
      handleSubmit(event){
        event.preventDefault(this.handleSearch);    
      } 



  render() {
    let items = this.state.results.map((item, key) =>
        <li>{item.title}</li>
    );
    return (
      <div className="App">
        <div className="nav-header">

        <form onSubmit={this.handleSubmit}>
            <label>
              Product: 
            </label>
            <input onChange={this.handleSearchInput} type="text" placeholder="write product here">
            </input>
            <button onClick={this.handleSearch}>
              Search
            </button>
        </form>   
        </div>
        <div className="body">
        {this.state.products}
        <ul>
          {items}
        </ul>

        </div>
     
      </div>
    );
  }
}

export default hot(module)(App);