import React, { Component } from 'react';

class Gallery extends Component {
    constructor(props) { // récupération des props
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.images.map((image) => { // application d'un map sur la propriété `images` des props qui à pour fonction de bouclé sur le tableau
                    return <img width="200px" height="200px" src={image.download_url} key={image.id} alt={image.author} />
                    // chaque tour de boucle le map retourne une image avec les données de l'image qui l'es en train de parcourir
                })}
            </div>
        )
    }
}

export default Gallery