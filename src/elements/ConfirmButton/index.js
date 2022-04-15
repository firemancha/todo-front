import "./index.css";

const ConfirmButton = () => {
  const onClick = () => {
    const input = document.querySelector(".todo-input");
    console.log(input.value);
    input.value = "";
  };

  return (
    <button className="todo-confirm-button" onClick={onClick}>
      등록
    </button>
  );
};

export default ConfirmButton;
