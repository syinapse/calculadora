import CalcButton from "./CalcButton";
import Numbers from "./Numbers";
import Div from "./Div";
import { useState } from "react";

function Calculadora() {
  const [number, setNumber] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstNumber, setFirstNumber] = useState(null);

  function onSetNumber(value) {
    if (number === "0") {
      setNumber(value);
      return;
    }
    setNumber(number + value);
  }
  function onSetOperator(op) {
    setFirstNumber(parseFloat(number));
    setOperator(op);
    setNumber(op);
  }

  function onCalculate() {
    if (!operator) return;

    const num = number.slice(1)
    let result = 0;
    switch (operator) {
      case "+":
        result = firstNumber + parseFloat(num);
        setNumber(String(result));
        break;
      case "-":
        result = firstNumber - parseFloat(num);
        setNumber(String(result));
        break;
      case "%":
        result = firstNumber % parseFloat(num);
        setNumber(String(result));
        break;
      case "√":
        result = Math.sqrt(parseFloat(num));
        setNumber(String(result));
        break;
      case "x":
        result = firstNumber * parseFloat(num);
        setNumber(String(result));
        break;
      case "÷":
        result = firstNumber / parseFloat(num);
        setNumber(String(result));
        break;
    }

    setFirstNumber(null);
    setOperator(null);
  }
  function onSetParantheses(state) {
    const openCount = (number.match(/\(/g) || []).length;
    const closeCount = (number.match(/\)/g) || []).length;

    //esse metodo serve retornar corerespondencias iguais
    /// e para nao retornar null usamod []
    if (state) {
      if (number === "0") {
        setNumber("(");
      } else {
        setNumber(number + "(");
      }
    } else {
      if (openCount > closeCount) {
        setNumber(number + ")");
      }
    }
  }

  function onScreenClear() {
    setNumber("0");
    setFirstNumber(null);
    setOperator(null);
  }

  return (
    <article className="bg-neutral-500 flex justify-center items-center min-h-screen p-5">
      <div className="bg-white rounded-4xl pb-7 shadow-2xl shadow-gray-900">
        <div className="bg-neutral-900 p-8 items-center rounded-t-4xl mb-7">
          <div
            className="bg-calcGreen h-30 rounded-3xl text-right p-5 text-5xl font-bold font-display text-calcGreen2 content-center"
            id="calcScreen"
          >
            {number.length >= 20 ? "error" : number}
          </div>
        </div>
        <div className="grid auto-rows-max grid-flow-row-dense gap-5 justify-center p-7">
          <Div>
            <CalcButton
              onClick={() => onScreenClear()}
              className="bg-calcRed text-white text-4xl hover:bg-calcRed2 transition duration-200 p-2.5 active:inset-shadow-sm inset-shadow-white"
            >
              C
            </CalcButton>
            <CalcButton onClick={() => onSetParantheses(true)}>(</CalcButton>
            <CalcButton onClick={() => onSetParantheses(false)}>)</CalcButton>
            <CalcButton onClick={() => setNumber(number * -1)}>+/-</CalcButton>
            <CalcButton onClick={() => onSetNumber("3.141592")}>π</CalcButton>
          </Div>
          <div className="grid auto-rows-auto grid-flow-row gap-5">
            <Div>
              <Numbers onClick={() => onSetNumber("7")}>7</Numbers>
              <Numbers onClick={() => onSetNumber("8")}>8</Numbers>
              <Numbers onClick={() => onSetNumber("9")}>9</Numbers>
              <CalcButton onClick={() => onSetOperator("%")}>%</CalcButton>
              <CalcButton onClick={() => onSetOperator("√")}>√</CalcButton>
            </Div>

            <Div>
              <Numbers onClick={() => onSetNumber("4")}>4</Numbers>
              <Numbers onClick={() => onSetNumber("5")}>5</Numbers>
              <Numbers onClick={() => onSetNumber("6")}>6</Numbers>
              <CalcButton onClick={() => onSetOperator("x")}>x</CalcButton>
              <CalcButton onClick={() => onSetOperator("÷")}>÷</CalcButton>
            </Div>
            <Div>
              <Numbers onClick={() => onSetNumber("1")}>1</Numbers>
              <Numbers onClick={() => onSetNumber("2")}>2</Numbers>
              <Numbers onClick={() => onSetNumber("3")}>3</Numbers>
              <CalcButton onClick={() => onSetOperator("+")}>+</CalcButton>
              <CalcButton onClick={() => onSetOperator("-")}>-</CalcButton>
            </Div>
            <Div>
              <Numbers onClick={() => onSetNumber("0")}>0</Numbers>
              <Numbers onClick={() => onSetNumber("00")}>00</Numbers>
              <Numbers onClick={() => onSetNumber(".")}>,</Numbers>
              <CalcButton
                onClick={() => onCalculate()}
                className="text-white bg-calcBlue text-3xl w-57 hover:bg-indigo-500 active:bg-indigo-700 active:inset-shadow-sm inset-shadow-indigo-100"
              >
                =
              </CalcButton>
            </Div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Calculadora;
