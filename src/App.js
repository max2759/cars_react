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


  changeTitle = (e) =>{
    console.log(e.target);

    /**
     * Passer par méthode setState() pour mettre à jour state car seule elle a le droit de modifier
     */
    this.setState({
      titre: 'Mon nouveau titre'
    })
  }

  /**
   * Même méthode qu'au dessus mais dynamique
   * @param {titre} titre 
   */
  changeViaParam= (titre)=>{
    this.setState({
      /**
       * soit titre : titre ou seulement titre
       */
      titre
    })
  }

  /**
   * si utilisation bind(), React conseille de gérer dans le constructor()
   */
  changeViaBind = (param) => {
      this.setState({
        titre: param
      })
  }

  changeViaInput = (e) => {

    this.setState({
     titre: e.target.value
    })
    
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

        {/* <button onClick={this.changeTitle}>Changez le nom en dur</button>
        {/* 
        **si on met changeVIaParam(), elle va se lancer au chargement de la page d'ou utilisation fonction anonyme
        */}
        {/* <button onClick={() => this.changeViaParam('Titre via un param')}>Changez le nom via param</button>

        <button onClick={this.changeViaBind.bind(this, 'Titre via Bind')}>Changez le nom via Bind</button>
      
      <input type="text" onChange={this.changeViaInput} value={this.state.titre}/> */}
      </div>
    );
  }
 
}

export default App;
