import React, {Component} from 'react';
/*
* Import de la classe Mycars.js dans App.js 
 */
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

  /**
   * Définition d'un state pour le titre de Mycars.js
   */
  state = {
    titre:'Mon catalogue de voitures'
  }

  render(){
    return (
      /**
       * className pour éviter l'ambiguité avec class d'une classe react
       */
      <div className="App">
        {/* 
        ** On va passer le state dans Mycars.js
        */}
        <Mycars title={this.state.titre}/>
      </div>
    );
  }
 
}

export default App;
