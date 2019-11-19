const rankArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const suitArray = ['D', 'S', 'H', 'C'];

let randomNumLimit = 52;

class CardDeck {
    cards = [];

    constructor(){
        for(let rank of rankArray){
            for(let suit of suitArray){
                this.cards.push({'rank': rank, 'suit': suit});
            }
        }
    }

    getCard(){
        const randomNum = Math.floor(Math.random() * randomNumLimit);

        const Card = this.cards.splice(randomNum, 1)[0];

        if(Card){
            randomNumLimit--;

            return Card;
        }else{
            console.log("No cards left");

            return {'rank': '', 'suit': ''};
        }
    }

    getCards(howMany){
        const cards = [];

        for(let i = 0; i < howMany; i++){
            cards.push(this.getCard());
        }

        return cards;
    }
}

const Deck = new CardDeck();

export default Deck;