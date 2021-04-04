import React, {Component} from 'react';
/*
* Import de la classe Mycars.js dans App.js 
 */
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

  render(){
    return (
      /**
       * className pour éviter l'ambiguité avec class d'une classe react
       */
      <div className="App">
        <Mycars/>
      </div>
    );
  }
 
}

export default App;
