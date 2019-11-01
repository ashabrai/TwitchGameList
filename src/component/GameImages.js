import React from 'react';

function GameImage({match, location}) {
    return <div>
        <li>{match.params.id}</li>
        <li>{location.state.gameID}</li>
    </div>
}
export default GameImage;