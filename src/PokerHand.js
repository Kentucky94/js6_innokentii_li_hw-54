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

        const deck = this.deck;

        const suitArray = deck.map((card) => card.suit).sort();
        const filteredSuitArray = suitArray.filter((suit) => {
            const index = suitArray.indexOf(suit);
            return suit === suitArray[index + 1];
        });

        console.log(filteredSuitArray);

        const rankArray = deck.map((card) => card.rank).sort();
        const filteredRankArray = rankArray.filter((rank) => {
            const index = rankArray.indexOf(rank);
            return rank === rankArray[index + 1];
        });

        console.log(filteredRankArray);

        let firstWord = '';
        let secondWord = '';

        if(filteredSuitArray.length === 5 && filteredRankArray.length === 0){
            firstWord = 'FLUSH';
        }else{
            firstWord = '';
        }

        if(filteredRankArray.length === 2){
            secondWord = 'PAIR';
        }else if(filteredRankArray.length === 4){
            secondWord = 'TWO PAIRS';
        }else if(filteredRankArray.length === 3){
            secondWord = 'THREE OF A KIND';
        }else if(filteredRankArray.length === 5){
            secondWord = 'FULL HOUSE';
        }else{
            secondWord = '';
        }

        return firstWord + ' ' + secondWord;
    }
}

const Hand = new PokerHand();

export default Hand;
