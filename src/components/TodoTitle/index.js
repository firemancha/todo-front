import { useState, useEffect } from "react";
import "./index.css";

const TodoTitle = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const now = new Date();
    let year = now.getFullYear().toString();
    let month = now.getMonth();

    if (month < 10) {
      month = "0" + month.toString();
    } else {
      month = month.toString();
    }

    let day = now.getDay();

    if (day < 10) {
      day = "0" + day.toString();
    } else {
      day = day.toString();
    }

    setDate(year + " / " + month + " / " + day);
  }, []);

  return <div className="todo-title">{date}</div>;
};

export default TodoTitle;
