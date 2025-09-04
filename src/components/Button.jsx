import React from "react";

function Button(props) {
  const style = `${props.bgcolor} ${props.textcolor} font-bold shadow-button w-24 p-2.5 text-4xl rounded-2.5xl cursor-pointer items-center`;
  return (
    <button onClick={props.onClick} className={style}>
      {props.children}
    </button>
  );
}

export default Button;
