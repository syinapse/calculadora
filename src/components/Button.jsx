import React from "react";

function Button({ children, bgcolor, textcolor, onClick }) {
  if (!bgcolor) {
    bgcolor = "bg-neutral-400"
  }
  if(!textcolor) {
    textcolor = "text-neutral-800"
  }  
  const style = `${bgcolor} ${textcolor} font-bold shadow-button w-28 p-3 text-4xl rounded-3xl cursor-pointer`;
  return <button onClick={onClick} className={style}>{children}</button>;
}

export default Button;
