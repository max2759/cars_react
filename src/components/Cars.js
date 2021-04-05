import React from 'react';

/*
* props permet d'importer un élément de l'élément parent
* au lieu de passer props on passe directement chidlren et color du props 
 */
const Car = ({nom, color, year}) =>{


    /* Si color = null affiche quand même qq chose */
    const colorInfo = color ? (<p>Couleur : { color }</p>) : (<p>Couleur : Non définie</p>);

    if (nom) {
        return(
            <div style={{backgroundColor: 'pink', width:'400px', padding: '10px', margin: '5px auto'}}>
                <p>Marque : { nom }</p>
                <p>Age : { year }</p>
                {colorInfo}
            </div>
        )
    }else{
        return null;
    }
}

export default Car;