import React, { Component } from 'react';
import Car from './Cars';

class Mycars extends Component{
    render() {
        return (
            <div>
                {/* 
                * On va récupérer ce qu'on a mis dans state en mettant this car class puis props et enfin title car Mycars title=...
                */}
                <h1>{this.props.title}</h1>

                <Car color="red">
                    Ford
                </Car>
                <Car>
                    Peugeot
                </Car>
                <Car color="silver">
                    
                </Car>
            </div>
        )
    }
}

/*
** Pour pouvoir l'importer dans une autre classe 
 */
export default Mycars;