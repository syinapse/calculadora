import React from "react";

function Operators(props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-neutral-300 text-neutral-800 font-bold shadow-button w-24 p-5 text-4xl rounded-[20px] cursor-pointer items-center"
    >
      {props.children}
    </button>
  );
}

export default Operators;
