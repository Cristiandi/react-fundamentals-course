import React, { Component } from 'react';
import './App.css';
import CounterWithHooks from './components/CounterWithHooks';

class App extends Component {  
  render() {
    return (
      <div>
        <CounterWithHooks />
      </div>
    );
  }
}

export default App;

// las props son aquellos atributos que se envian para instanciar un componentes
// el estado al igual que las propiedades ayudan a determinar el comportameinto del componente, solo que este si puede mutar en el componente.
// el estado de un objeto abarca todas las propiedades del objeto, y los valores actuales de cada una de esas propiedades. Las propiedades de los objetos suelen ser estáticas, mientras los valores que toman estas propiedades cambian con el tiempo 
// los elementos hijos de un componente llegan en props.children
// con las llaves podemos escribir espresiones de JS dentro de JSX
// los hooks le dan la capacidad a los componentes funcionales de tener las mismas habilidades que un componente creado a partir de una clase