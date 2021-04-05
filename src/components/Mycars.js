import React, { Component } from 'react';
import Car from './Cars';

class Mycars extends Component{


    state = {
        voitures: [
            {name: 'Ford', color: 'rouge', year:'2000'},
            {name: 'Mercedes', color: 'argent', year:'2010'},
            {name: 'Peugeot', color: 'vert', year:'2020'}
        ],
        titre: "Mon catalogue de voiture"
    }

    noCopy = () => {
        alert('Merci de ne pas copier le texte');
    }

    /**
     * Besoin du eventObject e
     * à mettre sur un onmoseover par ex
     * @param {*} e 
     */
    addStyle = (e) => {
        e.target.classList.toggle('styled');
    }

    addTenYears= ()=>{
        
        const updateState = this.state.voitures.map((param)=>{
            return param.year -= 10;
        })

        this.setState({
           updateState
        })
    }

    render() {


        const year = new Date().getFullYear();

        return (
            <div>
                {/* 
                * On va récupérer ce qu'on a mis dans state en mettant this car class puis props et enfin title car Mycars title=...
                */}
                <h1>{this.state.titre}</h1>

                <button onClick={this.addTenYears}>+ 10 ans</button>

                {/* <p onCopy={this.noCopy}>ipsum</p> */}

                {/* <Car year={"2000"} color="red">
                    
                </Car>
                <Car>
                    Peugeot
                </Car>
                <Car color="silver">
                    
                </Car> */}

                {/* <Car color={ this.state.voitures[0].color} year={year - this.state.voitures[0].year}>{this.state.voitures[0].name}</Car>
                <Car color={ this.state.voitures[1].color} year={year - this.state.voitures[1].year}>{this.state.voitures[1].name}</Car>
                <Car color={ this.state.voitures[0].color} year={year - this.state.voitures[2].year}>{this.state.voitures[2].name}</Car>
             */}
                {
                    this.state.voitures.map((voitures, index) => {
                        return(
                            <div key={index}>
                            <Car nom={voitures.name} color={voitures.color} year={year - voitures.year}/>
                            </div>
                        )
                    })
                }
            
            </div>
        )
    }
}

/*
** Pour pouvoir l'importer dans une autre classe 
 */
export default Mycars;