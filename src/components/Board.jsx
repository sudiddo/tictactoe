import React from "react";
import Square from "./Square";
import "../App.css";

export default function Board(props) {
  const { squares, status, selectSquare } = props;
  return (
    <div>
      <div className="board-row">
        <Square label={squares[0]} onClick={() => selectSquare(0)} />
        <Square label={squares[1]} onClick={() => selectSquare(1)} />
        <Square label={squares[2]} onClick={() => selectSquare(2)} />
      </div>
      <div className="board-row">
        <Square label={squares[3]} onClick={() => selectSquare(3)} />
        <Square label={squares[4]} onClick={() => selectSquare(4)} />
        <Square label={squares[5]} onClick={() => selectSquare(5)} />
      </div>
      <div className="board-row">
        <Square label={squares[6]} onClick={() => selectSquare(6)} />
        <Square label={squares[7]} onClick={() => selectSquare(7)} />
        <Square label={squares[8]} onClick={() => selectSquare(8)} />
      </div>

      {/* <div className="status">{status}</div> */}
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          width: "358px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#FFF",
            alignItems: "center",
          }}
        >
          <p>Player 1 (X)</p>
          <p style={{ fontSize: 16 }}>{status === "X" ? "WINNER" : "-"}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#FFF",
            alignItems: "center",
          }}
        >
          <p>TIE</p>
          <p style={{ fontSize: 16 }}>{status === "Draw" ? "DRAW" : "-"}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#FFF",
            alignItems: "center",
          }}
        >
          <p>Player 2 (O)</p>
          <p style={{ fontSize: 16 }}>{status === "0" ? "WINNER" : "-"}</p>
        </div>
      </div>
    </div>
  );
}
