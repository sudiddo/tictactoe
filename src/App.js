import React from "react";
import "./App.css";
import calculateWinner from "./calculate-winner";
import Board from "./components/Board";

export default function App() {
  function gameReducer(state, action) {
    const { squares, xIsNext } = state;
    switch (action.type) {
      case "SELECT_SQUARE": {
        const { square } = action;
        const winner = calculateWinner(squares);
        if (winner || squares[square]) {
          return state;
        }
        const squaresCopy = [...squares];
        squaresCopy[square] = xIsNext ? "X" : "0";
        return {
          squares: squaresCopy,
          xIsNext: !xIsNext,
        };
      }
      default: {
        throw new Error(
          `Unhandled action type: ${action.type}. Please fix it. Thank you.`
        );
      }
    }
  }

  const [state, dispatch] = React.useReducer(gameReducer, {
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  const { squares, xIsNext } = state;

  function selectSquare(square) {
    dispatch({ type: "SELECT_SQUARE", square });
  }

  function getStatus(squares, xIsNext) {
    const winner = calculateWinner(squares);
    if (winner) {
      return winner;
    } else if (squares.every(Boolean)) {
      return `Draw`;
    } else {
      return `Next player: ${xIsNext ? "X" : "0"}`;
    }
  }

  const status = getStatus(squares, xIsNext);

  return (
    <div className="game">
      <Board
        status={status}
        squares={squares}
        xIsNext={xIsNext}
        selectSquare={(index) => selectSquare(index)}
      />
    </div>
  );
}
