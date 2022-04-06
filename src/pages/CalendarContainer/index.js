import Clock from "../../components/Clock";
import Calendar from "../../components/Calendar";
import "./index.css";
import { Link } from "react-router-dom";

const CalendarContainer = () => {
  return (
    <div className="calendar-container">
      <Link to="/list">Todo</Link>
      <Clock />
      <Calendar />
    </div>
  );
};

export default CalendarContainer;
