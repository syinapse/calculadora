import React from "react";

function Numbers(props) {
  return (
    <button onClick={props.onClick} className="text-white bg-neutral-600 font-bold shadow-button w-24 text-4xl rounded-2.5xl cursor-pointer items-center p-5">
      {props.children}
    </button>
  );
}

export default Numbers;
