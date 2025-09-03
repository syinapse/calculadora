import React from "react";
import Button from "./Button";
import Numbers from "./Numbers";
import Operators from "./Operators";

function Calculadora() {
  return (
    <article className="bg-neutral-500 flex justify-center items-center min-h-screen p-4">
      <div className="bg-white h-[783px] rounded-4xl">
        <div className="bg-neutral-900 h-44 p-6 px-8 items-center rounded-t-4xl mb-7">
          <div className="bg-calcGreen w-full h-30 rounded-3xl"></div>
        </div>
        <div className="px-8 space-y-8">
          <div className="flex gap-10">
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
            <button className="text-neutral-800 bg-neutral-300 font-bold shadow-button w-24 text-3xl rounded-[20px] cursor-pointer items-center p-2">
              mod
            </button>
          </div>
          <div className="flex">
            <div className="flex gap-10 w-[389px] flex-wrap">
                <Numbers onClick="">7</Numbers>
                <Numbers onClick="">8</Numbers>
                <Numbers onClick="">9</Numbers>

                <Numbers onClick="">4</Numbers>
                <Numbers onClick="">5</Numbers>
                <Numbers onClick="">6</Numbers>

                <Numbers onClick="">1</Numbers>
                <Numbers onClick="">2</Numbers>
                <Numbers onClick="">3</Numbers>

                <Numbers onClick="">0</Numbers>
                <Numbers onClick="">00</Numbers>
                <Numbers onClick="">,</Numbers>
            </div>
            <div className="">
                <Operators>%</Operators>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Calculadora;
