import Button from "./Button";

const ButtonEnter = ({ name, operator, setResult, result, temp, setTemp }) => {
  const onClickButton = () => {
    switch (operator) {
      case "+":
        setTemp(+temp + +result);
        setResult(+temp + +result);
        break;
      case "-":
        setTemp(+temp - +result);
        setResult(+temp - +result);
        break;
      case "*":
        setTemp(+temp * +result);
        setResult(+temp * +result);
        break;
      case "/":
        setTemp(+temp / +result);
        setResult(+temp / +result);
        break;
      default:
        alert("잘못된 연산자입니다.");
    }
  };

  return <Button name={name} onClickButton={onClickButton} />;
};

export default ButtonEnter;
