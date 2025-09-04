import React from "react";
import Button from "./Button";
import Numbers from "./Numbers";
import Operators from "./Operators";
import Div from "./Div";

function Calculadora() {
  return (
    <article className="bg-neutral-500 flex justify-center items-center min-h-screen p-5">
      <div className="bg-white rounded-4xl pb-11 shadow-2xl shadow-gray-900">
        <div className="bg-neutral-900 p-8 items-center rounded-t-4xl mb-7">
          <input
            className="bg-calcGreen h-30 rounded-3xl text-right p-5 text-3xl font-bold font-display text-calcGreen2"
            type="text"
            disabled
            value="47"
          />
        </div>
        <div className="grid auto-rows-max grid-flow-row-dense gap-5 justify-center">
          <Div>
            <Button bgcolor="bg-calcRed" textcolor="text-white">
              C
            </Button>
            <Button bgcolor="bg-neutral-300" textcolor="text-neutral-800">
              (
            </Button>
            <Button bgcolor="bg-neutral-300" textcolor="text-neutral-800">
              )
            </Button>
            <Button bgcolor="bg-neutral-300" textcolor="text-neutral-800">
              +/-
            </Button>
            <button className="text-neutral-800 bg-neutral-300 font-bold shadow-button w-24 text-3xl rounded-2.5xl cursor-pointer items-center p-2">
              mod
            </button>
          </Div>
          <div className="grid auto-rows-auto grid-flow-row gap-5">
            <Div>
              <Numbers onClick="">7</Numbers>
              <Numbers onClick="">8</Numbers>
              <Numbers onClick="">9</Numbers>
              <Operators>%</Operators>
              <Operators>√</Operators>
            </Div>

            <Div>
              <Numbers onClick="">4</Numbers>
              <Numbers onClick="">5</Numbers>
              <Numbers onClick="">6</Numbers>
              <Operators>x</Operators>
              <Operators>÷</Operators>
            </Div>
            <Div>
              <Numbers onClick="">1</Numbers>
              <Numbers onClick="">2</Numbers>
              <Numbers onClick="">3</Numbers>
              <Operators>+</Operators>
              <Operators>-</Operators>
            </Div>
            <Div>
              <Numbers onClick="">0</Numbers>
              <Numbers onClick="">00</Numbers>
              <Numbers onClick="">,</Numbers>
              <button className="text-white bg-calcBlue font-bold shadow-button w-[232px] text-3xl rounded-2.5xl cursor-pointer items-center p-2">
                =
              </button>
            </Div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Calculadora;
