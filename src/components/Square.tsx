import React, { useState } from "react";
import './Square.css';

interface SquareProps {
  value: string;
  onClick: () => void;
}

function Square(props: SquareProps) {
  const [value, setValue] = useState(props.value);

  return (
    <button className="square" onClick={() => props.onClick()}>
      {value}
    </button>
  );
}

export default Square;