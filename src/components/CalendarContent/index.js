import "./index.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CalendarContent = () => {
  const [tmp, setTmp] = useState([]);

  useEffect(() => {
    let tmp1 = [];
    for (let i = 0; i < 42; i++) {
      tmp1.push(i + 1);
    }
    setTmp(tmp1);
  }, []);

  return (
    <div className="calendar-content">
      {tmp.map((i) => {
        return (
          <div key={i} className={`calendar-content-hello${i}`}>
            <Link to={`${i}/list/`}>{i}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarContent;
