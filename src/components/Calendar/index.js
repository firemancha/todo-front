import "./index.css";
import CalendarHeader from "../CalendarHeader";
import CalendarFooter from "../CalendarFooter";
import CalendarContent from "../CalendarContent";

const CalendarTemplate = () => {
  return (
    <div className="calendar-template">
      <CalendarHeader />
      <CalendarContent />
      <CalendarFooter />
    </div>
  );
};

export default CalendarTemplate;
