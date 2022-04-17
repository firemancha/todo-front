import "./index.css";

const ConfirmButton = (props) => {
  const onClick = () => {
    if (!props.inputRef.current.value) return;

    props.onSubmit(props.inputRef.current.value);

    let prevValue = props.inputRef.current.value;

    props.inputRef.current.value = "";

    let event = new Event("input", {
      target: props.inputRef.current,
      bubbles: true,
    });

    let tracker = props.inputRef.current._valueTracker;

    if (tracker) {
      tracker.setValue(prevValue);
    }

    props.inputRef.current.dispatchEvent(event);

    props.inputRef.current.focus();
  };

  return (
    <button className="todo-confirm-button" onClick={onClick}>
      등록
    </button>
  );
};

export default ConfirmButton;
