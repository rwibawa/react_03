import React, { useState } from "react";
import './Square.css';

interface SquareProps {
  value: string;
  onClick: () => void;
}

function Square(props: SquareProps) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;