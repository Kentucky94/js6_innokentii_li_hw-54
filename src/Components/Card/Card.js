import React from 'react';
import './Card.css'

const Card = (props) => {
    const ranks = {
        'D': 'diams',
        'H': 'hearts',
        'S': 'spades',
        'C': 'clubs',
    };

    const symbols = {
        'D': '♦',
        'H': '♥',
        'S': '♠',
        'C': '♣',
    };

    let className = `card rank-${props.rank.toLowerCase()} ${ranks[props.suit]}`;

    return (
        <div className={className}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{symbols[props.suit]}</span>
        </div>
    );
};

export default Card;