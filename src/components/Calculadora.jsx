import CalcButton from "./CalcButton";
import Numbers from "./Numbers";
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
            value=""
          />
        </div>
        <div className="grid auto-rows-max grid-flow-row-dense gap-5 justify-center">
          <Div>
            <CalcButton className="bg-calcRed text-white text-4xl hover:bg-calcRed2 transition duration-200 p-2.5 active:inset-shadow-sm inset-shadow-white">
              C
            </CalcButton>
            <CalcButton>(</CalcButton>
            <CalcButton>)</CalcButton>
            <CalcButton>+/-</CalcButton>
            <CalcButton className="bg-neutral-300 text-neutral-800 text-3xl hover:bg-neutral-400 hover:text-neutral-700 active:bg-neutral-500 transition duration-200 p-2.5">
              mod
            </CalcButton>
          </Div>
          <div className="grid auto-rows-auto grid-flow-row gap-5">
            <Div>
              <Numbers onClick="">7</Numbers>
              <Numbers onClick="">8</Numbers>
              <Numbers onClick="">9</Numbers>
              <CalcButton>%</CalcButton>
              <CalcButton>√</CalcButton>
            </Div>

            <Div>
              <Numbers onClick="">4</Numbers>
              <Numbers onClick="">5</Numbers>
              <Numbers onClick="">6</Numbers>
              <CalcButton>x</CalcButton>
              <CalcButton>÷</CalcButton>
            </Div>
            <Div>
              <Numbers onClick="">1</Numbers>
              <Numbers onClick="">2</Numbers>
              <Numbers onClick="">3</Numbers>
              <CalcButton>+</CalcButton>
              <CalcButton>-</CalcButton>
            </Div>
            <Div>
              <Numbers onClick="">0</Numbers>
              <Numbers onClick="">00</Numbers>
              <Numbers onClick="">,</Numbers>
              <CalcButton className="text-white bg-calcBlue text-3xl w-57 hover:bg-indigo-500 active:bg-indigo-700 active:inset-shadow-sm inset-shadow-indigo-100">
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
