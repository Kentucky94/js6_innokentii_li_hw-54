import React, {Component} from 'react';
import nanoid from 'nanoid';
import './App.css';
import './cards/cards.css';
import Card from './Components/Card/Card';
import Hand from "./PokerHand";

class App extends Component {
    state = {
        deck5: [],
    };

    get5 = () => {
        let deck5 = [...this.state.deck5];

        deck5 = Hand.getHand();

        this.setState({deck5});
    };

    render(){
        const newCards = this.state.deck5.map(card => (< Card key={nanoid()} suit={card.suit} rank={card.rank}/>));

        return (
            <div className="App">
                <button className="btn" onClick={this.get5}>Shuffle Cards</button>

                <div className="playingCards faceImages">
                    {newCards}
                </div>

                {Hand.getOutcome()}
            </div>
        );
    }
}

export default App;
