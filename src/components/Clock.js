import { useState } from "react";
import { useEffect } from "react";

const Clock = () => {
  const [today, setToday] = useToday();
  return (
    <div className="today-wrapper">
      <div className="today">{today}</div>
    </div>
  );
};

function clip(param) {
  return param < 10 ? "0" + param.toString() : param;
}

function useToday() {
  const [today, setToday] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let now = new Date();
      let todayYear = now.getFullYear();
      let todayMonth = now.getMonth();
      let todayDate = now.getDate();
      let dayOfWeek = week[now.getDay()];
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      setToday(
        `${todayYear}/${clip(todayMonth)}/${clip(
          todayDate
        )} ${dayOfWeek} ${clip(hours)}:${clip(minutes)}:${clip(seconds)}`
      );
    }, 1000);

    return () => clearTimeout(timeout);
  }, [today]);

  return [today, setToday];
}

export default Clock;
