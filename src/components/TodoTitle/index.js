import { useState, useEffect } from "react";
import TitleDate from "../../elements/TitleDate";
import TitleDay from "../../elements/TitleDay";
import "./index.css";

const TodoTitle = () => {
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    const today = new Date();

    let todayYear = today.getFullYear().toString();
    let todayMonth = today.getMonth() + 1;

    if (todayMonth < 10) {
      todayMonth = "0" + todayMonth.toString();
    } else {
      todayMonth = todayMonth.toString();
    }

    let todayDate = today.getDate();

    if (todayDate < 10) {
      todayDate = "0" + todayDate.toString();
    } else {
      todayDate = todayDate.toString();
    }

    const days = ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAT"];

    let todayDay = today.getDay();

    setDate(todayYear + " / " + todayMonth + " / " + todayDate);
    setDay(days[todayDay]);
  }, []);

  return (
    <div className="todo-title">
      <TitleDate date={date} />
      <TitleDay day={day} />
    </div>
  );
};

export default TodoTitle;
