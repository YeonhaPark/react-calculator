import Button from "./Button";

export default function ButtonDelete({ name, result, setResult }) {
  function onClickButton() {
    if (result.length === 1) {
      setResult("0");
    } else if (result !== "0") {
      setResult(result.substring(0, result.length - 1));
    }
  }
  return <Button name={name} onClickButton={onClickButton} />;
}
