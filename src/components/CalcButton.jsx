import React from "react";

function CalcButton({
  className = "bg-neutral-300 text-neutral-800 hover:bg-neutral-400 hover:text-neutral-700 transition duration-200 active:bg-neutral-500 text-4xl p-2.5 active:inset-shadow-sm inset-shadow-white",
  onClick,
  children,
}) {
  const style = `font-bold shadow-button w-24 rounded-2.5xl cursor-pointer items-center transition duration-200 ${className} `;
  return (
    <button onClick={onClick} className={style}>
      {children}
    </button>
  );
}

export default CalcButton;
