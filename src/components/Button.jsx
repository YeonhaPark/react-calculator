const Button = ({ name, onClickButton }) => {
  return (
    <button
      className="bg-blue-100 text-lg text-gray-700 font-bold w-14 h-14 rounded-md flex justify-center items-center shadow-sm active:bg-blue-200"
      onClick={() => onClickButton(name)}
    >
      {name}
    </button>
  );
};

export default Button;
