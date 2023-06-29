import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

const App = () => {
  const [game, setGame] = useState(new Chess());

  const handleMove = (move) => {
    if (game.move(move)) {
      setGame(new Chess(game.fen()));
    }
  };

  return (
    <div>
      <h1>Chess Game</h1>
      <Chessboard
        position={game.fen()}
        onPieceMove={({ from, to }) => handleMove({ from, to })}
      />
    </div>
  );
};

export default App;


