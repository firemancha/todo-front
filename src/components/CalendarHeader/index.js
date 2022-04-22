import "./index.css";

const CalendarHeader = (props) => {
  const { today } = props;
  return (
    <div className="calendar-header">
      <div className="calendar-header-title">
        <div className="calendar-header-title-month">
          {today.year} .{" "}
          {today.month < 10 ? "0" + today.month.toString() : today.month}
        </div>
        <div className="calendar-header-title-button">{today.month}</div>
      </div>
      <div className="calendar-header-day">
        <div className="calendar-header-day-sun">일</div>
        <div className="calendar-header-day-week">월</div>
        <div className="calendar-header-day-week">화</div>
        <div className="calendar-header-day-week">수</div>
        <div className="calendar-header-day-week">목</div>
        <div className="calendar-header-day-week">금</div>
        <div className="calendar-header-day-sat">토</div>
      </div>
    </div>
  );
};

export default CalendarHeader;
