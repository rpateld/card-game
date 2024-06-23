import React from 'react';
import Card from '../Card'

function Player({ cards, playerType }) {
    return (
        <div>
            <Card values={cards} playerType={playerType} />
        </div>
    );
}

export default Player;