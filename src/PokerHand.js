import React from 'react';
import Deck from './CardDeck';

class PokerHand{
    constructor(){
        this.deck = [];
    }

    getHand(){
        this.deck = Deck.getCards(5);

        return this.deck;
    }

    getOutcome(){
        console.log(this.deck);
    }
}

const Hand = new PokerHand();

export default Hand;
