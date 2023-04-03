import React, {Component} from 'react';

import Navbar from './components/navbar';
import Card from './components/card';

import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

class App extends Component {
  state = {
    cards: [
      {id: 0, nome: "California", prezzo: 1.99, immagine: california, quantità: 0},
      {id: 1, nome: "Dragon", prezzo: 3.49, immagine: dragon, quantità: 0},
      {id: 2, nome: "Dynamite", prezzo: 3.49, immagine: dynamite, quantità: 0},
      {id: 3, nome: "Philadelphia", prezzo: 2.49, immagine: philadelphia, quantità: 0},
      {id: 4, nome: "Rainbow", prezzo: 2.99, immagine: rainbow, quantità: 0},
      {id: 5, nome: "Shrimp", prezzo: 1.49, immagine: shrimp, quantità: 0},
    ]
  }

  handleDelete = cardId => { // cardId = identificativo della card da cancellare
    // updateCards è una lista aggiornata di cards, che conterrà tutte le card, eccetto quella da eliminare
    const cards = this.state.cards.filter(card => card.id !== cardId); // filtro solo le card che hanno le chiavi id diverse dal cardId in ingresso alla funzione
    this.setState({cards});
    // this.setState({cards: cards}) // oggetto costituito:
    // - dalla chiave dello state che vogliamo modificare;
    // - dal valore da assegnargli (il nome della costante)
    // NB. Se diamo alla costante lo stesso nome della chiave dello state da modificare, possiamo scrivere semplicemente cards, come fatto sopra

    // Questo è il metodo convenzionale per aggiornare lo stato dei componenti React, si devinisce la costante aggiornata e la si assegna allo stato tramite la funzione setState()
  };

  handleIncrement = card => { // prende in ingresso l'intera card
    const cards = [...this.state.cards]; // inseriamo la lista dello state (le cards)
    const id = cards.indexOf(card); // troviamo l'id della pietanza a cui aumentare la quantità (chiamando sulla card la funzione indexOf, che avrà come argomento la card sulla quale è stato premuto il tasto aggiungi passatoci dal componente figlio)
    cards[id] = {...card}; // sulla nuova lista card, alla posizione id, copiamo la card che abbiamo passato
    cards[id].quantità++; // incrementiamo il valore della chiave quantità
    this.setState({cards}); // aggiorniamo lo stato tramite la funzione setState
  }

  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1>Cosa desideri ordinare?</h1>
          <hr />
          <div className='row'>
            {this.state.cards.map(card => (
              <Card
              key={card.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              card={card} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
  
  export default App;
