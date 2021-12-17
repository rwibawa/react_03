import React, { useState } from "react";
import './Board.css';
import Square from "./Square";

function Board() {
  const status = 'Next player: X';
  const [squares, setSquares] = useState(Array(9).fill(null));

  const renderSquare = (i: number) => {
    return (
      <Square 
        value={squares[i]}
        onClick={() => handleClick(i)} 
      />
    );
  }

  const handleClick = (i: number) => {
    const tempSquares = squares.slice();
    tempSquares[i] = 'X';
    setSquares(tempSquares);
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;