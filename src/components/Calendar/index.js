import "./index.css";
import CalendarHeader from "../CalendarHeader";
import CalendarFooter from "../CalendarFooter";
import CalendarContent from "../CalendarContent";
import { useState, useEffect } from "react";

const CalendarTemplate = () => {
  const [today, setToday] = useState("");

  useEffect(() => {
    const now = new Date();
    let tmp = {};
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    tmp.year = year;
    tmp.month = month;
    tmp.date = date;

    setToday(tmp);
  }, []);

  return (
    <div className="calendar-template">
      <CalendarHeader today={today} />
      <CalendarContent />
      <CalendarFooter />
    </div>
  );
};

export default CalendarTemplate;
