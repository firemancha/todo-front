import Clock from "../../components/Clock";
import Calendar from "../../components/Calendar";
import "./index.css";

const CalendarContainer = () => {
  return (
    <div className="calendar-container">
      <Clock />
      <Calendar />
    </div>
  );
};

export default CalendarContainer;
