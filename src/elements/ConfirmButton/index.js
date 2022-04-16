import "./index.css";

const ConfirmButton = (props) => {
  const onClick = () => {
    const input = document.querySelector(".todo-input");

    if (!input.value) return;

    props.onSubmit(input.value);
    input.value = "";
  };

  return (
    <button className="todo-confirm-button" onClick={onClick}>
      등록
    </button>
  );
};

export default ConfirmButton;
