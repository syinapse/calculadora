import React from "react";

function Button(props) {
  const style = `${props.bgcolor} ${props.textcolor} font-bold shadow-button w-24 p-2.5 text-4xl rounded-[20px] cursor-pointer items-center`;
  return (
    <button onClick={props.onClick} className={style}>
      {props.children}
    </button>
  );
}

export default Button;

// function CalcButton({ children, className, colSpan = 1, rowSpan = 1 }) {
//   const baseStyle =
//     "font-bold shadow-button w-24 p-2.5 rounded-[20px] cursor-pointer items-center";

//   const gridClasses = `col-span-${colSpan} row-span-${rowSpan}`;

//   // Estilo base para todos os botões
//   //   const baseStyle =
//   //     "flex items-center justify-center h-20 rounded-2xl text-4xl font-bold shadow-button-press cursor-pointer transition-all active:shadow-none active:translate-x-[3px] active:translate-y-[3px]";

//   return (
//     <button className={`${baseStyle} ${className} ${gridClasses}`}>
//       {children}
//     </button>
//   );
// }
