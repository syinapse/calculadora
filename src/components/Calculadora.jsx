import React from "react";
import Button from "./Button";

function Calculadora() {
  return (
    <article className="bg-neutral-500 flex justify-center items-center min-h-screen p-4">
      <div className="bg-white w-3xl h-[783px] rounded-4xl">
        <div className="bg-neutral-900 h-44 p-6 px-8 items-center rounded-t-4xl mb-7">
          <div className="bg-calcGreen w-full h-30 rounded-3xl"></div>
        </div>
        <div className="px-8">
          <Button bgcolor="bg-calcRed" textcolor="text-white">
            C
          </Button>
        </div>
      </div>
    </article>
  );
}

export default Calculadora;
