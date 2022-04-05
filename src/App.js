import { Routes, Route } from "react-router-dom";
import CalendarContainer from "./pages/CalendarContainer";
import Clock from "./components/Clock";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CalendarContainer />} exact />
      <Route path="/clock" element={<Clock />} />
    </Routes>
  );
}

export default App;
