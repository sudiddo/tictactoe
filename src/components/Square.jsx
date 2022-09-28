import React from "react";
import "../App.css";
import { ImCross } from "react-icons/im";
import { CgShapeCircle } from "react-icons/cg";

export default function Square(props) {
  const { label, onClick } = props;
  return (
    <button className="square" onClick={onClick}>
      {label ? (
        label === "X" ? (
          <ImCross color={"#FFF"} size={72} />
        ) : (
          <CgShapeCircle color={"#FFF"} size={110} />
        )
      ) : null}
    </button>
  );
}
