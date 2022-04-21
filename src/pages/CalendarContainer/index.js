import "./index.css";
import { Link } from "react-router-dom";
import CalendarTemplate from "../../components/Calendar";

const CalendarContainer = () => {
  return (
    <div className="calendar-container">
      {/* <Link to="/list">Todo</Link> */}

      <CalendarTemplate />
    </div>
  );
};

export default CalendarContainer;
