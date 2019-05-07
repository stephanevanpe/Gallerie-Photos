import React, { Component } from 'react';
import Gallery from './Gallery.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { // déclaration de mon state dans mon constructor (toujours)
      images: [] // initialisation de la propriété `images` à un tableau vide sinon le map ça crasher
      // car le map fonctionne que sur des tableaux
    }
  }

  componentDidMount() {
    fetch('https://picsum.photos/v2/list?page=2&limit=20')
      .then(result => result.json()) // récupération du json
      .then((result) => {
        this.setState({ // appel de la fonction setState avec le mot clé this
          images: result // attribution du résultat du fetch à la propritété `images` du state
        })
      })
  }

  render() {
    return (
      <div>
        {/** test si la longeur du tableau images est suppérieur à 0 sinon la gallery va s'afficher alors que l'appel à l'api sois fini (asynchrone) */}
        {this.state.images.length > 0 ? <Gallery images={this.state.images} /> : null}
      </div>
    );
  }
}

export default App;