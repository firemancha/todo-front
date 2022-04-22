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
      <div className="calendar-header-day-list">
        <div className="calendar-header-day header-sun">일</div>
        <div className="calendar-header-day header-week">월</div>
        <div className="calendar-header-day header-week">화</div>
        <div className="calendar-header-day header-week">수</div>
        <div className="calendar-header-day header-week">목</div>
        <div className="calendar-header-day header-week">금</div>
        <div className="calendar-header-day header-sat">토</div>
      </div>
    </div>
  );
};

export default CalendarHeader;
