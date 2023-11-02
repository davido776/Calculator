import React, { useState } from "react";
import './App.css';
import Button from './components/Button/Button'
import ButtonBox from './components/Button/ButtonBox'
import Container from './components/Container/Container'
import Home from './components/Page/Home'


const btnValues = [
  ["C", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const history = [
  {
  expression: "3x2",
  result : 6
  },
  {
  expression: "3x3",
  result : 9
  },
  {
    expression: "3x4",
    result : 12
  },
];

const extractNumberOperands = (expression) => {
   
}

const App = () => {
  const [expression, setExpression] = useState("");
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setExpression((prevExpression) => prevExpression + value);
    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setExpression((prevExpression) => prevExpression + ".");
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setExpression((prevExpression) => prevExpression + value);
    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;
      
      const finalres = calc.num === "0" && calc.sign === "/"
      ? "Can't divide with 0"
      : toLocaleString(
          math(
            Number(removeSpaces(calc.res)),
            Number(removeSpaces(calc.num)),
            calc.sign
          )
        );
      setExpression(finalres);
      setCalc({
        ...calc,
        res:finalres,
        sign: "",
        num: 0,
      });

    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      sign: "",
    });
  };

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const resetClickHandler = () => {
    setExpression("");
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };


  return (
    <div className="wrapper">
      <Container>
        <Home value={expression || (calc.num ? calc.num : calc.res)} />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={
                  btn === "C"
                    ? resetClickHandler
                    : btn === "+-"
                    ? invertClickHandler
                    : btn === "%"
                    ? percentClickHandler
                    : btn === "="
                    ? equalsClickHandler
                    : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                    ? signClickHandler
                    : btn === "."
                    ? commaClickHandler
                    : numClickHandler
                }
              />
            );
          })}
        </ButtonBox>
      </Container>
      <Container>
        {history.map((x, i) => {
          return <Home value={x.expression} result={x.result} />
        })}
      </Container>   
    </div>
  );
};


export default App;