import { useState } from "react";

import ButtonNumber from "./ButtonNumber";
import Result from "./Result";
import Button from "./Button";
import ButtonOperator from "./ButtonOperator";
import ButtonEnter from "./ButtonEnter";
import ButtonDelete from "./ButtonDelete";

const Calculator = () => {
  const [result, setResult] = useState("0");
  const [temp, setTemp] = useState("");
  const [operator, setOperator] = useState("");
  function onClickButtonNumber(v) {
    console.log({ v });
  }

  function onClickButton(val) {
    switch (val) {
      case "Enter":
        setResult(temp);
    }
  }
  return (
    <div className="bg-pink-200 p-4 rounded-md shadow-md">
      <Result result={result} />
      <div className="grid grid-cols-4 gap-2 mt-4">
        <ButtonNumber
          name="1"
          result={result}
          setResult={setResult}
          operator={operator}
          setOperator={setOperator}
          setTemp={setTemp}
        />
        <ButtonNumber
          name="2"
          result={result}
          setResult={setResult}
          operator={operator}
          setOperator={setOperator}
          setTemp={setTemp}
        />
        <ButtonNumber
          name="3"
          result={result}
          setResult={setResult}
          operator={operator}
          setOperator={setOperator}
          setTemp={setTemp}
        />
        <ButtonOperator
          name="+"
          setResult={setResult}
          result={result}
          setOperator={setOperator}
          setTemp={setTemp}
        />
        <ButtonNumber
          name="4"
          result={result}
          setResult={setResult}
          operator={operator}
          setOperator={setOperator}
          setTemp={setTemp}
        />
        <ButtonNumber
          name="5"
          result={result}
          setResult={setResult}
          operator={operator}
          setOperator={setOperator}
          setTemp={setTemp}
        />
        <ButtonNumber
          name="6"
          result={result}
          setResult={setResult}
          operator={operator}
          setOperator={setOperator}
          setTemp={setTemp}
        />
        <ButtonOperator
          name="-"
          setResult={setResult}
          result={result}
          setOperator={setOperator}
          setTemp={setTemp}
        />
        <ButtonNumber
          name="7"
          result={result}
          setResult={setResult}
          operator={operator}
          setOperator={setOperator}
          setTemp={setTemp}
        />
        <ButtonNumber
          name="8"
          result={result}
          setResult={setResult}
          operator={operator}
          setOperator={setOperator}
          setTemp={setTemp}
        />
        <ButtonNumber
          name="9"
          result={result}
          setResult={setResult}
          operator={operator}
          setOperator={setOperator}
          setTemp={setTemp}
        />
        <ButtonOperator
          name="*"
          setResult={setResult}
          result={result}
          setOperator={setOperator}
          setTemp={setTemp}
        />
        <ButtonEnter
          name="Enter"
          operator={operator}
          result={result}
          setResult={setResult}
          temp={temp}
          setTemp={setTemp}
        />
        <ButtonNumber
          name="0"
          result={result}
          setResult={setResult}
          onClickButtonNumber={() => onClickButtonNumber("0")}
          setTemp={setTemp}
        />
        <ButtonDelete name="Del" result={result} setResult={setResult} />
        <ButtonOperator
          name="/"
          setOperator={setOperator}
          setResult={setResult}
          result={result}
          setTemp={setTemp}
        />
      </div>
    </div>
  );
};

export default Calculator;
